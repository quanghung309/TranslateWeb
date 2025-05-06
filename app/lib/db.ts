// Database utility functions with Prisma client
import { PrismaClient } from "../generated/prisma";

const prismaClientSingleton = () => {
   return new PrismaClient();
};

declare global {
   var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = global.prisma ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;

export async function saveDictionaryEntry(
   word: string,
   definitions: {
      meaning: string;
      partOfSpeech?: string;
      examples?: string[];
   }[],
   language: string
) {
   return prisma.dictionaryEntry.upsert({
      where: {
         word_language: { word, language },
      },
      update: {
         definition: {
            deleteMany: {},
            create: definitions.map((def) => ({
               meaning: def.meaning,
               partOfSpeech: def.partOfSpeech ?? "unknown",
               examples: def.examples ?? [],
            })),
         },
      },
      create: {
         word,
         language,
         definition: {
            create: definitions.map((def) => ({
               meaning: def.meaning,
               partOfSpeech: def.partOfSpeech ?? "unknown",
               examples: def.examples ?? [],
            })),
         },
      },
   });
}

export async function findDictionaryEntry(word: string, language: string) {
   return prisma.dictionaryEntry.findUnique({
      where: {
         word_language: { word, language },
      },
      include: {
         definition: true,
      },
   });
}

export async function saveTranslationHistory(
   originalText: string,
   translatedText: string,
   sourceLanguage: string,
   targetLanguage: string
) {
   return prisma.translationHistory.create({
      data: {
         originalText,
         translatedText,
         sourceLanguage,
         targetLanguage,
      },
   });
}

export async function getRecentTranslations(limit = 10) {
   return prisma.translationHistory.findMany({
      take: limit,
      orderBy: {
         createdAt: "desc",
      },
   });
}
