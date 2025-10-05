import React, { useState } from "react";
import { ConfigProvider, theme } from "antd";
import SocialPostCreatorAntD from "./components/SocialPostCreatorAntD";

const themes = {
  light: {
    name: "Light",
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: "#1890ff",
      borderRadius: 6,
    },
  },
  dark: {
    name: "Dark",
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#177ddc",
      borderRadius: 6,
    },
  },
  ocean: {
    name: "Ocean",
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: "#0093E9",
      colorBgContainer: "#e3f6fd",
      borderRadius: 12,
    },
  },
  sunset: {
    name: "Sunset",
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#ff6e7f",
      colorBgContainer: "#2b273f",
      borderRadius: 20,
    },
  },
};

const translations = {
  en: {
    language: "Language:",
    theme: "Theme:",
    themes: {
      light: "Light",
      dark: "Dark",
      ocean: "Ocean",
      sunset: "Sunset",
    },
  },
  el: {
    language: "Γλώσσα:",
    theme: "Θέμα εμφάνισης:",
    themes: {
      light: "Φωτεινό",
      dark: "Σκοτεινό",
      ocean: "Ωκεανός",
      sunset: "Δύση Ηλίου",
    },
  },
};

function App() {
  const [lang, setLang] = useState("en");
  const [themeKey, setThemeKey] = useState("light");

  return (
    <ConfigProvider
      theme={{
        algorithm: themes[themeKey].algorithm,
        token: themes[themeKey].token,
      }}
    >
      <div style={{ padding: 24, minHeight: "100vh", background: themes[themeKey].token.colorBgContainer || undefined }}>
        <label style={{ marginRight: 15 }}>
          {translations[lang].language}
          <select value={lang} onChange={e => setLang(e.target.value)} style={{ marginLeft: 5 }}>
            <option value="en">English</option>
            <option value="el">Ελληνικά</option>
          </select>
        </label>
        <label>
          {translations[lang].theme}
          <select value={themeKey} onChange={e => setThemeKey(e.target.value)} style={{ marginLeft: 5 }}>
            {Object.entries(translations[lang].themes).map(([key, name]) => (
              <option value={key} key={key}>{name}</option>
            ))}
          </select>
        </label>
        <SocialPostCreatorAntD lang={lang} />
      </div>
    </ConfigProvider>
  );
}

export default App;