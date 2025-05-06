"use client";

import { useState } from "react";

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
   { code: "vn", name: "Vietnamese" },
];

export default function TranslateComponent() {
   const [sourceText, setSourceText] = useState("");
   const [translatedText, setTranslatedText] = useState("");
   const [sourceLanguage, setSourceLanguage] = useState("en");
   const [targetLanguage, setTargetLanguage] = useState("es");
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");

   const handleSwapLanguages = () => {
      setSourceLanguage(targetLanguage);
      setTargetLanguage(sourceLanguage);
      setSourceText(translatedText);
      setTranslatedText(sourceText);
   };

   const handleTranslate = async () => {
      if (!sourceText.trim()) {
         setError("Please enter text to translate");
         return;
      }

      setIsLoading(true);
      setError("");

      try {
         const response = await fetch("/api/translate", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               text: sourceText,
               sourceLanguage,
               targetLanguage,
            }),
         });

         if (!response.ok) {
            throw new Error("Translation failed");
         }

         const data = await response.json();
         setTranslatedText(data.translatedText);
      } catch (err) {
         setError("Failed to translate text. Please try again.");
         console.error("Translation error:", err);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="flex flex-col gap-4">
         <div className="flex items-center gap-4">
            <select
               value={sourceLanguage}
               onChange={(e) => setSourceLanguage(e.target.value)}
               className="flex-1 p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
               {LANGUAGES.map((lang) => (
                  <option key={`source-${lang.code}`} value={lang.code}>
                     {lang.name}
                  </option>
               ))}
            </select>

            <button
               onClick={handleSwapLanguages}
               className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg border-none cursor-pointer text-xl transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
               aria-label="Swap languages"
            >
               ⇄
            </button>

            <select
               value={targetLanguage}
               onChange={(e) => setTargetLanguage(e.target.value)}
               className="flex-1 p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
               {LANGUAGES.map((lang) => (
                  <option key={`target-${lang.code}`} value={lang.code}>
                     {lang.name}
                  </option>
               ))}
            </select>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea
               value={sourceText}
               onChange={(e) => setSourceText(e.target.value)}
               placeholder="Enter text to translate"
               className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-base min-h-[150px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
               rows={5}
            />

            <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-gray-100 dark:bg-gray-700 min-h-[150px] flex items-center justify-center">
               {isLoading ? (
                  <div className="flex items-center justify-center min-h-[100px] text-gray-500 dark:text-gray-400 opacity-70">
                     Translating...
                  </div>
               ) : (
                  <div className="w-full h-full whitespace-pre-wrap break-words">
                     {translatedText}
                  </div>
               )}
            </div>
         </div>

         {error && <div className="text-red-500 py-2">{error}</div>}

         <button
            onClick={handleTranslate}
            disabled={isLoading || !sourceText.trim()}
            className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
         >
            {isLoading ? "Translating..." : "Translate"}
         </button>
      </div>
   );
}
