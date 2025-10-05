import React, { useState } from "react";
import SocialPostCreator from "./components/SocialPostCreator"; // <-- Εισαγωγή του component

const messages = {
  en: {
    welcome: "Welcome to AI Social Studio!",
    description: "Start building your app here.",
    language: "Language:",
  },
  el: {
    welcome: "Καλώς ήρθες στο AI Social Studio!",
    description: "Ξεκίνα να χτίζεις την εφαρμογή σου εδώ.",
    language: "Γλώσσα:",
  },
};

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <label>
        {messages[lang].language}
        <select value={lang} onChange={e => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="el">Ελληνικά</option>
        </select>
      </label>
      <h1>{messages[lang].welcome}</h1>
      <p>{messages[lang].description}</p>
      
      {/* ΕΔΩ εμφανίζεται το SocialPostCreator */}
      <SocialPostCreator lang={lang} />
    </div>
  );
}

export default App;
