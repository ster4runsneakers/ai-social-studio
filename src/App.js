import React, { useState } from "react";
import SocialPostCreator from "./components/SocialPostCreator";

const translations = {
  en: {
    title: "Welcome to AI Social Studio!",
    description: "Start building your app here.",
    language: "Language:",
  },
  el: {
    title: "Καλώς ήρθες στο AI Social Studio!",
    description: "Ξεκίνα να χτίζεις την εφαρμογή σου εδώ.",
    language: "Γλώσσα:",
  },
};

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <label>
        {translations[lang].language}
        <select value={lang} onChange={e => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="el">Ελληνικά</option>
        </select>
      </label>
      <h1>{translations[lang].title}</h1>
      <p>{translations[lang].description}</p>
      {/* ΕΔΩ ΕΜΦΑΝΙΖΕΤΑΙ ΤΟ COMPONENT */}
      <SocialPostCreator lang={lang} />
    </div>
  );
}

export default App;
