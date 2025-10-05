import React, { useState } from "react";
import SocialPostCreator from "./components/SocialPostCreator";
import { ThemeProvider, createTheme, CssBaseline, useMediaQuery } from "@mui/material";

const translations = {
  en: {
    title: "Welcome to AI Social Studio!",
    description: "Start building your app here.",
    language: "Language:",
    theme: "Theme:",
    auto: "Auto",
    light: "Light",
    dark: "Dark",
  },
  el: {
    title: "Καλώς ήρθες στο AI Social Studio!",
    description: "Ξεκίνα να χτίζεις την εφαρμογή σου εδώ.",
    language: "Γλώσσα:",
    theme: "Θέμα εμφάνισης:",
    auto: "Αυτόματο",
    light: "Φωτεινό",
    dark: "Σκοτεινό",
  },
};

function App() {
  const [lang, setLang] = useState("en");
  const [themeMode, setThemeMode] = useState("auto"); // auto, light, dark
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Επιλογή theme ανάλογα με το χειροκίνητο ή το αυτόματο
  const actualMode =
    themeMode === "auto" ? (prefersDarkMode ? "dark" : "light") : themeMode;

  const theme = createTheme({
    palette: {
      mode: actualMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        {/* Επιλογή γλώσσας */}
        <label style={{ marginRight: 15 }}>
          {translations[lang].language}
          <select value={lang} onChange={e => setLang(e.target.value)} style={{ marginLeft: 5 }}>
            <option value="en">English</option>
            <option value="el">Ελληνικά</option>
          </select>
        </label>
        {/* Επιλογή theme */}
        <label>
          {translations[lang].theme}
          <select value={themeMode} onChange={e => setThemeMode(e.target.value)} style={{ marginLeft: 5 }}>
            <option value="auto">{translations[lang].auto}</option>
            <option value="light">{translations[lang].light}</option>
            <option value="dark">{translations[lang].dark}</option>
          </select>
        </label>
        <h1>{translations[lang].title}</h1>
        <p>{translations[lang].description}</p>
        <SocialPostCreator lang={lang} />
      </div>
    </ThemeProvider>
  );
}

export default App;
