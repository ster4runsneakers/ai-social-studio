import React, { useState } from "react";
import SocialPostCreatorMUI from "./components/SocialPostCreatorMUI";
import SocialPostCreatorAntD from "./components/SocialPostCreatorAntD";
import SocialPostCreatorChakra from "./components/SocialPostCreatorChakra";

const translations = {
  en: {
    language: "Language:",
    ui: "UI Style:",
    mui: "Material UI",
    antd: "Ant Design",
    chakra: "Chakra UI",
  },
  el: {
    language: "Γλώσσα:",
    ui: "Εμφάνιση UI:",
    mui: "Material UI",
    antd: "Ant Design",
    chakra: "Chakra UI",
  },
};

function App() {
  const [lang, setLang] = useState("en");
  const [ui, setUI] = useState("mui");

  return (
    <div>
      <label style={{ marginRight: 15 }}>
        {translations[lang].language}
        <select value={lang} onChange={e => setLang(e.target.value)} style={{ marginLeft: 5 }}>
          <option value="en">English</option>
          <option value="el">Ελληνικά</option>
        </select>
      </label>
      <label>
        {translations[lang].ui}
        <select value={ui} onChange={e => setUI(e.target.value)} style={{ marginLeft: 5 }}>
          <option value="mui">{translations[lang].mui}</option>
          <option value="antd">{translations[lang].antd}</option>
          <option value="chakra">{translations[lang].chakra}</option>
        </select>
      </label>
      {ui === "mui" && <SocialPostCreatorMUI lang={lang} />}
      {ui === "antd" && <SocialPostCreatorAntD lang={lang} />}
      {ui === "chakra" && <SocialPostCreatorChakra lang={lang} />}
    </div>
  );
}

export default App;
