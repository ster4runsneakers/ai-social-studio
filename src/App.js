import React, { useState } from "react";
import SocialPostCreator from "./components/SocialPostCreator";

function App() {
  const [lang, setLang] = useState("el"); // Ή "en" για default Αγγλικά

  const messages = {
    en: { language: "Language:" },
    el: { language: "Γλώσσα:" },
  };

  return (
    <div>
      <label>
        {messages[lang].language}
        <select value={lang} onChange={e => setLang(e.target.value)}>
          <option value="el">Ελληνικά</option>
          <option value="en">English</option>
        </select>
      </label>
      <SocialPostCreator lang={lang} />
    </div>
  );
}

export default App;
