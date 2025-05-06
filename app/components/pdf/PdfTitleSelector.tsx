"use client";

import { useState } from "react";
import { DocumentTitle, ProcessedDocument } from "@/app/lib/pdf-utils";

export default function PdfTitleSelector({
   document,
   onTitleSelect,
}: {
   document: ProcessedDocument;
   onTitleSelect: (title: DocumentTitle) => void;
}) {
   const [selectedTitleIndex, setSelectedTitleIndex] = useState<number | null>(
      null
   );

   const handleTitleClick = (index: number) => {
      setSelectedTitleIndex(index);
      onTitleSelect(document.titles[index]);
   };

   return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
         <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Document Sections</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
               {document.fileName}
            </span>
         </div>

         {document.titles.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 italic">
               No sections found. This document may not have clear headings or
               titles.
            </p>
         ) : (
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
               {document.titles.map((title, index) => (
                  <button
                     key={index}
                     className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedTitleIndex === index
                           ? "bg-indigo-100 dark:bg-indigo-900 border-l-4 border-indigo-600"
                           : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                     }`}
                     onClick={() => handleTitleClick(index)}
                  >
                     <p className="font-medium truncate">{title.title}</p>
                  </button>
               ))}
            </div>
         )}
      </div>
   );
}
