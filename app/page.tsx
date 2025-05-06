import TranslateComponent from "./components/TranslateComponent";
import DictionaryComponent from "./components/DictionaryComponent";
import PdfTranslator from "./components/pdf/PdfTranslator";

export default function Home() {
   return (
      <div className="max-w-7xl mx-auto p-8">
         <header className="text-center mb-8 pb-4 border-b border-slate-200 dark:border-slate-700">
            <h1 className="text-4xl mb-2 font-bold">
               Translation App with Gemini AI
            </h1>
            <p className="text-lg">
               Translate text between languages and look up word definitions
            </p>
         </header>

         <main className="flex flex-col gap-8">
            <section className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 shadow-md">
               <h2 className="text-2xl mb-4 font-semibold">Translation</h2>
               <TranslateComponent />
            </section>

            <section className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 shadow-md">
               <h2 className="text-2xl mb-4 font-semibold">Dictionary</h2>
               <DictionaryComponent />
            </section>

            <section className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 shadow-md">
               <PdfTranslator />
            </section>
         </main>

         <footer className="mt-12 pt-4 text-center border-t border-slate-200 dark:border-slate-700 text-gray-500">
            <p>&copy; 2023 Translation App</p>
         </footer>
      </div>
   );
}
