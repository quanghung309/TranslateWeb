"use client";

import { useState, useRef } from "react";
import { DocumentTitle, ProcessedDocument } from "@/app/lib/pdf-utils";

export default function PdfUploader({
   onDocumentProcessed,
}: {
   onDocumentProcessed: (document: ProcessedDocument) => void;
}) {
   const [isUploading, setIsUploading] = useState(false);
   const [uploadError, setUploadError] = useState("");
   const [uploadProgress, setUploadProgress] = useState(0);
   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      const file = files[0];

      if (!file.name.toLowerCase().endsWith(".pdf")) {
         setUploadError("Please select a PDF file");
         return;
      }

      if (file.size > 5 * 1024 * 1024) {
         setUploadError("File size exceeds the 5MB limit");
         return;
      }

      setIsUploading(true);
      setUploadError("");
      setUploadProgress(0);

      try {
         const formData = new FormData();
         formData.append("file", file);

         const response = await fetch("/api/pdf-upload", {
            method: "POST",
            body: formData,
         });

         console.log("Response:", response);

         if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to upload PDF");
         }
         const result = await response.json();
         onDocumentProcessed(result.document);
         if (fileInputRef.current) {
            fileInputRef.current.value = "";
         }
      } catch (error) {
         console.error("Error uploading PDF:", error);
         setUploadError(
            error instanceof Error ? error.message : "Failed to upload PDF"
         );
      } finally {
         setIsUploading(false);
         setUploadProgress(100);
      }
   };

   return (
      <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
         <h2 className="text-xl font-bold mb-4">Upload PDF Document</h2>

         <div className="w-full max-w-md">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600">
               <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                     className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                     ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                     <span className="font-semibold">Click to upload</span> or
                     drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                     PDF files only (max 5MB)
                  </p>
               </div>
               <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={handleFileChange}
                  disabled={isUploading}
               />
            </label>

            {isUploading && (
               <div className="w-full mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                     <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                     ></div>
                  </div>
                  <p className="text-sm text-center mt-2">
                     Processing document...
                  </p>
               </div>
            )}

            {uploadError && (
               <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {uploadError}
               </p>
            )}
         </div>
      </div>
   );
}
