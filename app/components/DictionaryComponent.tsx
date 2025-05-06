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
      <div className="dictionary-container">
         <h2>Dictionary Lookup</h2>

         <div className="dictionary-form">
            <input
               type="text"
               value={word}
               onChange={(e) => setWord(e.target.value)}
               placeholder="Enter a word"
               className="word-input"
            />

            <select
               value={language}
               onChange={(e) => setLanguage(e.target.value)}
               className="language-select"
            >
               <option value="en">English</option>
               <option value="es">Spanish</option>
               <option value="fr">French</option>
               <option value="de">German</option>
               <option value="it">Italian</option>
               <option value="ja">Japanese</option>
               <option value="zh">Chinese</option>
            </select>

            <button
               onClick={handleLookup}
               disabled={isLoading || !word.trim()}
               className="lookup-button"
            >
               {isLoading ? "Looking up..." : "Look up"}
            </button>
         </div>

         {error && <div className="error-message">{error}</div>}

         {isLoading && <div className="loading">Looking up word...</div>}

         {result && (
            <div className="definition-result">
               <h3>{result.word}</h3>
               {result.definitions.map((def, index) => (
                  <div key={index} className="definition-item">
                     <p className="part-of-speech">{def.partOfSpeech}</p>
                     <p className="meaning">{def.meaning}</p>
                     {def.examples && def.examples.length > 0 && (
                        <div className="examples">
                           <p className="examples-title">Examples:</p>
                           <ul>
                              {def.examples.map((example, i) => (
                                 <li key={i}>{example}</li>
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
