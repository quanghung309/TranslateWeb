import { NextRequest, NextResponse } from "next/server";
import { translateDocumentSection } from "@/app/lib/pdf-utils";

export async function POST(request: NextRequest) {
   try {
      const body = await request.json();
      const { title, documentId, sourceLanguage, targetLanguage } = body;

      if (!title || !documentId || !sourceLanguage || !targetLanguage) {
         return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
         );
      }

      const translatedContent = await translateDocumentSection(
         title,
         documentId,
         sourceLanguage,
         targetLanguage
      );

      return NextResponse.json({
         success: true,
         title,
         translatedContent,
      });
   } catch (error) {
      console.error("PDF translation error:", error);
      return NextResponse.json(
         { error: "Failed to translate document section" },
         { status: 500 }
      );
   }
}
