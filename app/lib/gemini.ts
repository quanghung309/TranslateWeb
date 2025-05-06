import {
   GoogleGenerativeAI,
   HarmCategory,
   HarmBlockThreshold,
} from "@google/generative-ai";

export interface TranslationResult {
   translatedText: string;
   detectedLanguage?: string;
   confidence?: number;
}

export interface DictionaryResult {
   word: string;
   definitions: {
      partOfSpeech: string;
      meaning: string;
      examples?: string[];
   }[];
   language: string;
}

const apiKey = "AIzaSyCmC4Lc5HccTxnbzatLgzr-bB2s6VB_J58";
const genAI = new GoogleGenerativeAI(apiKey);

const safetySettings = [
   {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
   },
   {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
   },
   {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
   },
   {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
   },
];

// Helper function to convert language codes to full names for better API understanding
function getFullLanguageName(code: string): string {
   const languageMap: Record<string, string> = {
      en: "English",
      es: "Spanish",
      fr: "French",
      de: "German",
      it: "Italian",
      ja: "Japanese",
      ko: "Korean",
      zh: "Chinese",
      ru: "Russian",
      vn: "Vietnamese",
   };

   return languageMap[code] || code;
}

export async function translateText(
   text: string,
   sourceLanguage: string,
   targetLanguage: string
): Promise<TranslationResult> {
   if (!text || text.trim() === "") {
      return {
         translatedText: "",
         detectedLanguage: sourceLanguage,
         confidence: 0,
      };
   }

   try {
      const model = genAI.getGenerativeModel({
         model: "gemini-2.0-flash-exp",
         safetySettings,
         generationConfig: {
            temperature: 0.2,
            topP: 0.8,
            topK: 40,
         },
      });

      const sourceLangName = getFullLanguageName(sourceLanguage);
      const targetLangName = getFullLanguageName(targetLanguage);

      const prompt = `Translate the following text from ${sourceLangName} to ${targetLangName}. 
    
Input text: "${text}"
    
Respond with ONLY the translated text, nothing else. Do not include any explanations, quotation marks, or formatting.`;

      let attempts = 0;
      const maxAttempts = 3;
      let lastError = null;

      while (attempts < maxAttempts) {
         try {
            console.log(
               `Translation attempt ${attempts + 1} for text: ${text.substring(
                  0,
                  20
               )}...`
            );
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const translatedText = response.text().trim();

            if (translatedText) {
               console.log(`Translation successful on attempt ${attempts + 1}`);
               return {
                  translatedText,
                  detectedLanguage: sourceLanguage,
                  confidence: 0.9,
               };
            }
            attempts++;
         } catch (retryError) {
            console.error(
               `Translation attempt ${attempts + 1} failed:`,
               retryError
            );
            lastError = retryError;
            attempts++;
            await new Promise((resolve) => setTimeout(resolve, 1000));
         }
      }

      if (lastError) {
         throw new Error(
            `Failed after ${maxAttempts} attempts. Last error: ${
               lastError instanceof Error
                  ? lastError.message
                  : JSON.stringify(lastError)
            }`
         );
      } else {
         throw new Error(`Failed after ${maxAttempts} attempts`);
      }
   } catch (error) {
      console.error("Translation error details:", error);

      if (error instanceof Error) {
         const errorMsg = error.message || "";
         if (errorMsg.includes("API key")) {
            throw new Error("Invalid or missing API key");
         } else if (errorMsg.includes("quota")) {
            throw new Error("API quota exceeded");
         } else if (errorMsg.includes("safety")) {
            throw new Error("Content was flagged by safety filters");
         } else if (errorMsg.includes("models/gemini")) {
            throw new Error(
               "API model not found. The Gemini API may have been updated - please check the latest documentation"
            );
         } else {
            throw new Error(`Translation failed: ${errorMsg}`);
         }
      }

      throw new Error("Failed to translate text due to an unknown error");
   }
}

export async function getDictionaryDefinition(
   word: string,
   language: string
): Promise<DictionaryResult> {
   if (!word || word.trim() === "") {
      return {
         word: "",
         definitions: [],
         language,
      };
   }

   try {
      const model = genAI.getGenerativeModel({
         model: "gemini-2.0-flash-exp",
         safetySettings,
         generationConfig: {
            temperature: 0.3,
            topP: 0.8,
            topK: 40,
         },
      });

      const languageName = getFullLanguageName(language);

      const prompt = `Provide a dictionary definition for the word "${word.trim()}" in ${languageName}.
    
Format the response as a JSON object with the following structure:
{
  "word": "${word.trim()}",
  "definitions": [
    {
      "partOfSpeech": "noun/verb/adjective/etc",
      "meaning": "definition text",
      "examples": ["example sentence 1", "example sentence 2"]
    }
  ],
  "language": "${language}"
}
    
IMPORTANT: Return ONLY the JSON object. DO NOT wrap it in markdown code blocks or add any other text.`;

      let attempts = 0;
      const maxAttempts = 3;
      let lastError = null;

      while (attempts < maxAttempts) {
         try {
            console.log(
               `Dictionary lookup attempt ${attempts + 1} for word: ${word}`
            );
            const result = await model.generateContent(prompt);
            const response = await result.response;
            let jsonResponse = response.text().trim();

            jsonResponse = jsonResponse.replace(/^```json\s*|\s*```$/g, "");
            jsonResponse = jsonResponse.replace(/^```\s*|\s*```$/g, "");

            const jsonMatch = jsonResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
               jsonResponse = jsonMatch[0];
            }

            try {
               const parsedResult = JSON.parse(jsonResponse);
               console.log(
                  `Dictionary lookup successful on attempt ${attempts + 1}`
               );
               return parsedResult;
            } catch (parseError) {
               console.error("Error parsing dictionary response:", parseError);
               console.log("Raw response:", jsonResponse);

               const potentialJsonMatches =
                  jsonResponse.match(/\{[^{]*"word"[^}]*\}/g);
               if (potentialJsonMatches && potentialJsonMatches.length > 0) {
                  try {
                     const possibleJson = potentialJsonMatches[0];
                     let braceCount = 0;
                     let completeJson = "";
                     for (let i = 0; i < jsonResponse.length; i++) {
                        completeJson += jsonResponse[i];
                        if (jsonResponse[i] === "{") braceCount++;
                        if (jsonResponse[i] === "}") {
                           braceCount--;
                           if (braceCount === 0) break;
                        }
                     }

                     if (completeJson) {
                        const finalResult = JSON.parse(completeJson);
                        console.log(
                           "Successfully parsed JSON after extraction"
                        );
                        return finalResult;
                     }
                  } catch (extractError) {
                     console.error(
                        "Failed to extract valid JSON:",
                        extractError
                     );
                  }
               }

               lastError = new Error("Invalid JSON response");
               throw lastError;
            }
         } catch (retryError) {
            console.error(
               `Dictionary lookup attempt ${attempts + 1} failed:`,
               retryError
            );
            lastError = retryError;
            attempts++;
            await new Promise((resolve) => setTimeout(resolve, 1000));
         }
      }

      console.error(
         `Dictionary lookup failed after ${maxAttempts} attempts. Last error:`,
         lastError
      );
      return {
         word: word.trim(),
         definitions: [
            {
               partOfSpeech: "unknown",
               meaning: "Definition not available after multiple attempts",
            },
         ],
         language,
      };
   } catch (error) {
      console.error("Dictionary lookup error details:", error);

      return {
         word: word.trim(),
         definitions: [
            {
               partOfSpeech: "unknown",
               meaning:
                  "Definition temporarily unavailable due to a service error",
            },
         ],
         language,
      };
   }
}
