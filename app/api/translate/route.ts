import { NextResponse } from "next/server";
import { translateText } from "@/app/lib/gemini";
import { saveTranslationHistory } from "@/app/lib/db";

export async function POST(request: Request) {
   try {
      const body = await request.json();
      const { text, sourceLanguage, targetLanguage } = body;

      if (!text || !sourceLanguage || !targetLanguage) {
         return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
         );
      }

      const translation = await translateText(
         text,
         sourceLanguage,
         targetLanguage
      );

      await saveTranslationHistory(
         text,
         translation.translatedText,
         sourceLanguage,
         targetLanguage
      );

      return NextResponse.json(translation);
   } catch (error) {
      console.error("Translation API error:", error);
      return NextResponse.json(
         { error: "Failed to translate text" },
         { status: 500 }
      );
   }
}
