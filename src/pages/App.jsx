import { createGlobalStyle } from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages//Home";
import Login from "pages//Login";
import PageLayout from "components/PageLayout";

const GlobalStyle = createGlobalStyle`
body{
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: "Kaushan Script"
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
