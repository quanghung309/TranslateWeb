"use client";

import { useState } from "react";
import PdfUploader from "./PdfUploader";
import PdfTitleSelector from "./PdfTitleSelector";
import { DocumentTitle, ProcessedDocument } from "@/app/lib/pdf-utils";

const LANGUAGES = [
   { code: "en", name: "English" },
   { code: "es", name: "Spanish" },
   { code: "fr", name: "French" },
   { code: "de", name: "German" },
   { code: "it", name: "Italian" },
   { code: "ja", name: "Japanese" },
   { code: "ko", name: "Korean" },
   { code: "zh", name: "Chinese" },
   { code: "ru", name: "Russian" },
   { code: "ar", name: "Arabic" },
   { code: "vn", name: "Vietnamese" },
];

export default function PdfTranslator() {
   const [processedDocument, setProcessedDocument] =
      useState<ProcessedDocument | null>(null);
   const [selectedTitle, setSelectedTitle] = useState<DocumentTitle | null>(
      null
   );
   const [sourceLanguage, setSourceLanguage] = useState("en");
   const [targetLanguage, setTargetLanguage] = useState("es");
   const [translatedContent, setTranslatedContent] = useState("");
   const [isTranslating, setIsTranslating] = useState(false);
   const [error, setError] = useState("");

   const handleDocumentProcessed = (document: ProcessedDocument) => {
      setProcessedDocument(document);
      setSelectedTitle(null);
      setTranslatedContent("");
      setError("");
   };

   const handleTitleSelect = (title: DocumentTitle) => {
      setSelectedTitle(title);
      setTranslatedContent("");
      setError("");
   };

   const handleTranslate = async () => {
      if (!selectedTitle || !processedDocument) return;

      setIsTranslating(true);
      setError("");

      try {
         const response = await fetch("/api/pdf-translate", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               title: selectedTitle.title,
               documentId: processedDocument.documentId,
               sourceLanguage,
               targetLanguage,
            }),
         });

         if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
               errorData.error || "Failed to translate document section"
            );
         }

         const data = await response.json();
         setTranslatedContent(data.translatedContent);
      } catch (err) {
         console.error("Translation error:", err);
         setError(
            err instanceof Error
               ? err.message
               : "Failed to translate document section"
         );
      } finally {
         setIsTranslating(false);
      }
   };

   return (
      <div className="flex flex-col gap-6">
         <h1 className="text-2xl font-bold">PDF Document Translation</h1>

         {!processedDocument && (
            <PdfUploader onDocumentProcessed={handleDocumentProcessed} />
         )}

         {processedDocument && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="md:col-span-1">
                  <PdfTitleSelector
                     document={processedDocument}
                     onTitleSelect={handleTitleSelect}
                  />

                  {selectedTitle && (
                     <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-medium mb-4">
                           Translation Settings
                        </h3>

                        <div className="space-y-4">
                           <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                 Source Language
                              </label>
                              <select
                                 value={sourceLanguage}
                                 onChange={(e) =>
                                    setSourceLanguage(e.target.value)
                                 }
                                 className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                              >
                                 {LANGUAGES.map((lang) => (
                                    <option
                                       key={`source-${lang.code}`}
                                       value={lang.code}
                                    >
                                       {lang.name}
                                    </option>
                                 ))}
                              </select>
                           </div>

                           <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                 Target Language
                              </label>
                              <select
                                 value={targetLanguage}
                                 onChange={(e) =>
                                    setTargetLanguage(e.target.value)
                                 }
                                 className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                              >
                                 {LANGUAGES.map((lang) => (
                                    <option
                                       key={`target-${lang.code}`}
                                       value={lang.code}
                                    >
                                       {lang.name}
                                    </option>
                                 ))}
                              </select>
                           </div>

                           <button
                              onClick={handleTranslate}
                              disabled={isTranslating}
                              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                           >
                              {isTranslating
                                 ? "Translating..."
                                 : "Translate Section"}
                           </button>
                        </div>
                     </div>
                  )}
               </div>

               {/* Right panel: Translation results */}
               <div className="md:col-span-2">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 h-full">
                     {selectedTitle ? (
                        <>
                           <h2 className="text-xl font-bold mb-4">
                              {selectedTitle.title}
                           </h2>

                           {error && (
                              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg">
                                 {error}
                              </div>
                           )}

                           {isTranslating ? (
                              <div className="flex justify-center items-center h-64">
                                 <div className="animate-pulse flex flex-col items-center">
                                    <div className="h-12 w-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                                       Translating...
                                    </p>
                                 </div>
                              </div>
                           ) : translatedContent ? (
                              <div className="prose dark:prose-invert max-w-none">
                                 <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg whitespace-pre-wrap">
                                    {translatedContent}
                                 </div>
                              </div>
                           ) : (
                              <p className="text-gray-500 dark:text-gray-400 italic">
                                 Select languages and click "Translate Section"
                                 to view the translation.
                              </p>
                           )}
                        </>
                     ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-center">
                           <svg
                              className="w-16 h-16 text-gray-400 mb-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                           </svg>
                           <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                              Select a section to translate
                           </h3>
                           <p className="mt-2 text-gray-500 dark:text-gray-400">
                              Choose a section from the document to see its
                              translation
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         )}

         {processedDocument && (
            <button
               onClick={() => setProcessedDocument(null)}
               className="mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
               Upload a different document
            </button>
         )}
      </div>
   );
}
