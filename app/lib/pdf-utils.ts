// PDF processing utilities for document translation
import { Pinecone } from "@pinecone-database/pinecone";
import { Document } from "langchain/document";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

type PineconeMetadata = {
   documentId: string;
   fileName: string;
   chunkId: string;
   titles: string[];
   pageContent?: string;
};

type PineconeRecord = {
   id: string;
   values: number[];
   metadata: PineconeMetadata;
};

let pdfParse: any;
try {
   pdfParse = require("pdf-parse");
} catch (err) {
   console.error("Error loading pdf-parse:", err);
   pdfParse = async (buffer: Buffer) => {
      return {
         text: "Failed to parse PDF content. PDF parsing library not available.",
         numpages: 0,
         info: {},
      };
   };
}

const genAI = new GoogleGenerativeAI(
   process.env.GEMINI_API_KEY || "AIzaSyCmC4Lc5HccTxnbzatLgzr-bB2s6VB_J58"
);

let pineconeClient: Pinecone | null = null;

const initPinecone = async () => {
   if (!pineconeClient) {
      pineconeClient = new Pinecone({
         apiKey: process.env.PINECONE_API_KEY || "",
      });
   }
   return pineconeClient;
};

export interface DocumentTitle {
   title: string;
   chunkIds: string[];
   content?: string;
}

export interface ProcessedDocument {
   titles: DocumentTitle[];
   documentId: string;
   fileName: string;
}

export const extractTitles = (text: string): DocumentTitle[] => {
   const headingPattern = /(?:^|\n)([A-Z][A-Za-z0-9\s]{2,60})(?:\n|$)/g;
   const titles: DocumentTitle[] = [];

   let match;
   while ((match = headingPattern.exec(text)) !== null) {
      const title = match[1].trim();
      if (
         title.length > 3 &&
         !title.match(/^(The|A|An|And|Or|But|For|Of|To|In|On|With|By)$/i)
      ) {
         titles.push({ title, chunkIds: [] });
      }
   }

   return titles;
};

export const processPdfDocument = async (
   fileBuffer: Buffer,
   fileName: string
): Promise<ProcessedDocument> => {
   try {
      const pdfData = await pdfParse(fileBuffer);
      const text = pdfData.text;

      const titles = extractTitles(text);

      const documentId = `doc_${Date.now()}_${Math.floor(
         Math.random() * 1000
      )}`;

      return { titles, documentId, fileName };
   } catch (error) {
      console.error("Error processing PDF document:", error);
      throw new Error(
         "Failed to process PDF document: " +
            (error instanceof Error ? error.message : String(error))
      );
   }
};

export const storeDocumentInPinecone = async (
   fileBuffer: Buffer,
   fileName: string,
   documentId: string
): Promise<ProcessedDocument> => {
   try {
      const pdfData = await pdfParse(fileBuffer);
      const text = pdfData.text;
      const extractedTitles = extractTitles(text);
      const splitter = new RecursiveCharacterTextSplitter({
         chunkSize: 200,
         chunkOverlap: 100,
      });

      const chunks = await splitter.splitText(text);
      const titles = mapChunksToTitles(chunks, extractedTitles, text);

      const documents = chunks.map(
         (chunk, i) =>
            new Document({
               pageContent: chunk,
               metadata: {
                  documentId,
                  fileName,
                  chunkId: `chunk_${i}`,
                  titles: titles
                     .filter((t) => t.chunkIds.includes(`chunk_${i}`))
                     .map((t) => t.title),
               },
            })
      );

      const pinecone = await initPinecone();
      if (!pinecone) {
         throw new Error("Failed to initialize Pinecone");
      }

      const indexName = "document-translations";

      const listIndexesResponse = await pinecone.listIndexes();
      console.log("Index list response:", JSON.stringify(listIndexesResponse));

      let index;
      try {
         index = pinecone.index(indexName);

         console.log(`Using existing Pinecone index: ${indexName}`);
      } catch (error) {
         console.log(`Index ${indexName} doesn't exist, creating it...`);

         try {
            await pinecone.createIndex({
               name: indexName,
               dimension: 768,
               metric: "dotproduct",
               spec: {
                  serverless: {
                     cloud: "aws",
                     region: "us-east-1",
                  },
               },
            });

            console.log(
               `Created Pinecone index ${indexName}, waiting for it to initialize...`
            );
            await new Promise((resolve) => setTimeout(resolve, 10000));

            index = pinecone.index(indexName);
         } catch (createError) {
            console.error("Error during index creation:", createError);

            if (
               String(createError).includes("ALREADY_EXISTS") ||
               String(createError).includes("already exists") ||
               String(createError).includes("409")
            ) {
               console.log("Index already exists, retrieving it...");
               index = pinecone.index(indexName);
            } else {
               throw createError;
            }
         }
      }

      if (!index) {
         throw new Error(
            `Failed to get or create Pinecone index: ${indexName}`
         );
      }

      const embeddingModel = genAI.getGenerativeModel({
         model: "embedding-001",
      });

      for (let i = 0; i < documents.length; i += 10) {
         const batch = documents.slice(i, i + 10);

         const embedPromises = batch.map(async (doc) => {
            try {
               const result = await embeddingModel.embedContent(
                  doc.pageContent
               );
               const embedding = result.embedding.values;

               const record: PineconeRecord = {
                  id: doc.metadata.chunkId as string,
                  values: embedding,
                  metadata: {
                     documentId: doc.metadata.documentId as string,
                     fileName: doc.metadata.fileName as string,
                     chunkId: doc.metadata.chunkId as string,
                     titles: doc.metadata.titles as string[],
                     pageContent: doc.pageContent,
                  },
               };

               return record;
            } catch (error) {
               console.error("Error embedding document:", error);
               return null;
            }
         });

         const embedResults = await Promise.all(embedPromises);
         const validEmbeddings = embedResults.filter(
            (item): item is PineconeRecord => item !== null
         );

         if (validEmbeddings.length > 0) {
            await index.upsert(validEmbeddings);
         }
      }

      return { titles, documentId, fileName };
   } catch (error) {
      console.error("Error storing document in Pinecone:", error);
      throw new Error("Failed to store document in Pinecone");
   }
};

const mapChunksToTitles = (
   chunks: string[],
   extractedTitles: DocumentTitle[],
   fullText: string
): DocumentTitle[] => {
   const titles = [...extractedTitles];

   const titlePositions = titles.map((title) => ({
      title: title.title,
      position: fullText.indexOf(title.title),
   }));

   chunks.forEach((chunk, chunkIndex) => {
      const chunkPosition = fullText.indexOf(chunk);
      const chunkId = `chunk_${chunkIndex}`;

      let closestTitle = null;
      let closestDistance = Infinity;

      for (const titlePos of titlePositions) {
         if (titlePos.position < chunkPosition) {
            const distance = chunkPosition - titlePos.position;
            if (distance < closestDistance) {
               closestDistance = distance;
               closestTitle = titlePos.title;
            }
         }
      }

      if (closestTitle) {
         const titleIndex = titles.findIndex((t) => t.title === closestTitle);
         if (titleIndex !== -1) {
            titles[titleIndex].chunkIds.push(chunkId);
         }
      }
   });

   return titles;
};

export const translateDocumentSection = async (
   title: string,
   documentId: string,
   sourceLanguage: string,
   targetLanguage: string
): Promise<string> => {
   try {
      const pinecone = await initPinecone();
      if (!pinecone) {
         throw new Error("Failed to initialize Pinecone");
      }

      const index = pinecone.index("document-translations");

      const embeddingModel = genAI.getGenerativeModel({
         model: "embedding-001",
      });
      const result = await embeddingModel.embedContent(title);
      const queryEmbedding = result.embedding.values;

      const queryResponse = await index.query({
         vector: queryEmbedding,
         filter: { documentId },
         topK: 10,
         includeMetadata: true,
      });

      const contextText = queryResponse.matches
         .filter((match) => match.metadata?.chunkId)
         .sort((a, b) => {
            const aIndex = parseInt(
               String(a.metadata!.chunkId).split("_")[1],
               10
            );
            const bIndex = parseInt(
               String(b.metadata!.chunkId).split("_")[1],
               10
            );
            return aIndex - bIndex;
         })
         .map((match) => match.metadata!.pageContent || "")
         .join("\n\n");
      console.log("Context text:", contextText);
      const translationModel = genAI.getGenerativeModel({
         model: "gemini-2.0-flash-exp",
         generationConfig: {
            temperature: 0.2,
         },
      });

      const prompt = `
You are translating a document from ${sourceLanguage} to ${targetLanguage}.

The document is divided into sections, each with a clear title.
Your task is to translate **only** the section with the title: "${title}".

Below is the full document context. Extract the section titled "${title}" and translate **only that section**.

Maintain the original formatting and structure.

---
Document content:
${contextText}
---

IMPORTANT: Only return the translated text of the section titled "${title}". Do not translate or include other sections.
`;

      const response = await translationModel.generateContent(prompt);
      const translatedText = response.response.text();

      return translatedText;
   } catch (error) {
      console.error("Error translating document section:", error);
      throw new Error("Failed to translate document section");
   }
};
