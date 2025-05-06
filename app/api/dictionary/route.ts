import { NextResponse } from "next/server";
import { getDictionaryDefinition } from "@/app/lib/gemini";
import { findDictionaryEntry, saveDictionaryEntry } from "@/app/lib/db";

export async function POST(request: Request) {
   try {
      const body = await request.json();
      const { word, language } = body;

      if (!word || !language) {
         return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
         );
      }

      const existingEntry = await findDictionaryEntry(word, language);
      if (existingEntry) {
         return NextResponse.json({
            word: existingEntry.word,
            definitions: [
               {
                  partOfSpeech: existingEntry.partOfSpeech || "unknown",
                  meaning: existingEntry.definition,
                  examples: existingEntry.examples
                     ? existingEntry.examples.split("\n")
                     : [],
               },
            ],
            language: existingEntry.language,
         });
      }

      const definition = await getDictionaryDefinition(word, language);

      if (definition && definition.definitions.length > 0) {
         const firstDef = definition.definitions[0];
         await saveDictionaryEntry(
            word,
            firstDef.meaning,
            language,
            firstDef.partOfSpeech,
            firstDef.examples ? firstDef.examples.join("\n") : undefined
         );
      }

      return NextResponse.json(definition);
   } catch (error) {
      console.error("Dictionary API error:", error);
      return NextResponse.json(
         { error: "Failed to get dictionary definition" },
         { status: 500 }
      );
   }
}
