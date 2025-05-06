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
      <div className="translate-container">
         <div className="language-select-container">
            <select
               value={sourceLanguage}
               onChange={(e) => setSourceLanguage(e.target.value)}
               className="language-select"
            >
               {LANGUAGES.map((lang) => (
                  <option key={`source-${lang.code}`} value={lang.code}>
                     {lang.name}
                  </option>
               ))}
            </select>

            <button
               onClick={handleSwapLanguages}
               className="swap-button"
               aria-label="Swap languages"
            >
               ⇄
            </button>

            <select
               value={targetLanguage}
               onChange={(e) => setTargetLanguage(e.target.value)}
               className="language-select"
            >
               {LANGUAGES.map((lang) => (
                  <option key={`target-${lang.code}`} value={lang.code}>
                     {lang.name}
                  </option>
               ))}
            </select>
         </div>

         <div className="text-areas">
            <textarea
               value={sourceText}
               onChange={(e) => setSourceText(e.target.value)}
               placeholder="Enter text to translate"
               className="text-input"
               rows={5}
            />

            <div className="text-output">
               {isLoading ? (
                  <div className="loading">Translating...</div>
               ) : (
                  <div className="translated-text">{translatedText}</div>
               )}
            </div>
         </div>

         {error && <div className="error-message">{error}</div>}

         <button
            onClick={handleTranslate}
            disabled={isLoading || !sourceText.trim()}
            className="translate-button"
         >
            {isLoading ? "Translating..." : "Translate"}
         </button>
      </div>
   );
}
