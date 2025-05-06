/*
  Warnings:

  - You are about to drop the column `definition` on the `DictionaryEntry` table. All the data in the column will be lost.
  - You are about to drop the column `examples` on the `DictionaryEntry` table. All the data in the column will be lost.
  - You are about to drop the column `partOfSpeech` on the `DictionaryEntry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DictionaryEntry" DROP COLUMN "definition",
DROP COLUMN "examples",
DROP COLUMN "partOfSpeech";

-- CreateTable
CREATE TABLE "Definition" (
    "id" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "partOfSpeech" TEXT NOT NULL,
    "examples" TEXT[],
    "dictionaryEntryId" TEXT NOT NULL,

    CONSTRAINT "Definition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Definition" ADD CONSTRAINT "Definition_dictionaryEntryId_fkey" FOREIGN KEY ("dictionaryEntryId") REFERENCES "DictionaryEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
