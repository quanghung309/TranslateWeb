import { NextRequest, NextResponse } from "next/server";
import {
   processPdfDocument,
   storeDocumentInPinecone,
} from "@/app/lib/pdf-utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: NextRequest) {
   try {
      const contentType = request.headers.get("content-type") || "";
      if (!contentType.includes("multipart/form-data")) {
         return NextResponse.json(
            { error: "Request must be multipart/form-data" },
            { status: 400 }
         );
      }

      const formData = await request.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
         return NextResponse.json(
            { error: "No file provided" },
            { status: 400 }
         );
      }

      if (!file.name.toLowerCase().endsWith(".pdf")) {
         return NextResponse.json(
            { error: "File must be a PDF" },
            { status: 400 }
         );
      }

      if (file.size > MAX_FILE_SIZE) {
         return NextResponse.json(
            { error: "File size exceeds the 5MB limit" },
            { status: 400 }
         );
      }
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const processedDocument = await processPdfDocument(fileBuffer, file.name);
      await storeDocumentInPinecone(
         fileBuffer,
         file.name,
         processedDocument.documentId
      );

      return NextResponse.json({
         success: true,
         message: "PDF processed successfully",
         document: processedDocument,
      });
   } catch (error) {
      console.error("PDF upload error:", error);
      return NextResponse.json(
         { error: "Failed to process PDF" },
         { status: 500 }
      );
   }
}

export const config = {
   api: {
      bodyParser: false,
      responseLimit: "10mb",
   },
};
