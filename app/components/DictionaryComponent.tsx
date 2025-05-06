"use client";

import { useState } from "react";
import { DictionaryResult } from "../lib/gemini";

export default function DictionaryComponent() {
   const [word, setWord] = useState("");
   const [language, setLanguage] = useState("en");
   const [result, setResult] = useState<DictionaryResult | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");

   const handleLookup = async () => {
      if (!word.trim()) {
         setError("Please enter a word to look up");
         return;
      }

      setIsLoading(true);
      setError("");
      setResult(null);

      try {
         const response = await fetch("/api/dictionary", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               word: word.trim().toLowerCase(),
               language,
            }),
         });

         if (!response.ok) {
            throw new Error("Dictionary lookup failed");
         }

         const data = await response.json();
         setResult(data);
      } catch (err) {
         setError("Failed to look up word. Please try again.");
         console.error("Dictionary error:", err);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="flex flex-col gap-6">
         <div className="flex flex-col md:flex-row gap-4">
            <input
               type="text"
               value={word}
               onChange={(e) => setWord(e.target.value)}
               placeholder="Enter a word"
               className="flex-grow p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
               value={language}
               onChange={(e) => setLanguage(e.target.value)}
               className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
               <option value="en">English</option>
               <option value="es">Spanish</option>
               <option value="fr">French</option>
               <option value="de">German</option>
               <option value="it">Italian</option>
               <option value="ja">Japanese</option>
               <option value="zh">Chinese</option>
               <option value="vn">Vietnamese</option>
            </select>

            <button
               onClick={handleLookup}
               disabled={isLoading || !word.trim()}
               className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
               {isLoading ? "Looking up..." : "Look up"}
            </button>
         </div>

         {error && <div className="text-red-500 py-2">{error}</div>}

         {isLoading && (
            <div className="flex items-center justify-center min-h-[100px] text-gray-500 dark:text-gray-400 opacity-70">
               Looking up word...
            </div>
         )}

         {result && (
            <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-gray-100 dark:bg-gray-700">
               <h3 className="text-2xl mb-4 pb-2 border-b border-slate-200 dark:border-slate-600">
                  {result.word}
               </h3>

               {result.definitions.map((def, index) => (
                  <div key={index} className="mb-6">
                     <p className="italic mb-2 text-indigo-600 dark:text-indigo-400">
                        {def.partOfSpeech}
                     </p>
                     <p className="mb-4 text-lg">{def.meaning}</p>

                     {def.examples && def.examples.length > 0 && (
                        <div className="mt-2">
                           <p className="font-bold mb-2">Examples:</p>
                           <ul className="list-disc pl-6">
                              {def.examples.map((example, i) => (
                                 <li key={i} className="mb-1">
                                    {example}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}
