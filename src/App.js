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

function App() {
  const [themeKey, setThemeKey] = useState("light");

  return (
    <ConfigProvider
      theme={{
        algorithm: themes[themeKey].algorithm,
        token: themes[themeKey].token,
      }}
    >
      <div style={{ padding: 24, minHeight: "100vh", background: themes[themeKey].token.colorBgContainer || undefined }}>
        <label style={{ marginBottom: 20, display: "inline-block" }}>
          Theme:&nbsp;
          <select value={themeKey} onChange={e => setThemeKey(e.target.value)}>
            {Object.entries(themes).map(([key, t]) => (
              <option value={key} key={key}>{t.name}</option>
            ))}
          </select>
        </label>
        <SocialPostCreatorAntD lang="en" />
      </div>
    </ConfigProvider>
  );
}

export default App;
