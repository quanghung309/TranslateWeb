import TranslateComponent from "./components/TranslateComponent";
import DictionaryComponent from "./components/DictionaryComponent";

export default function Home() {
   return (
      <div className="container">
         <header>
            <h1>Translation App with Gemini AI</h1>
            <p>Translate text between languages and look up word definitions</p>
         </header>

         <main>
            <section className="translation-section">
               <h2>Translation</h2>
               <TranslateComponent />
            </section>

            <section className="dictionary-section">
               <DictionaryComponent />
            </section>
         </main>

         <footer>
            <p>&copy; 2023 Translation App</p>
         </footer>
      </div>
   );
}
