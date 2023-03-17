import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages//Home";
import Login from "pages//Login";
import LightTheme from "components/themes/light";
import DarkTheme from "components/themes/dark";

const GlobalStyle = createGlobalStyle`
body{
  background: ${(p) => p.theme.bodyColor};
  min-height: 100vh;
  margin: 0;
  color: ${(p) => p.theme.color};
  font-family: "Kaushan Script"
}
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((p) => (p.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
