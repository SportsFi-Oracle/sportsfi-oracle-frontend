import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TokenDetailPage from "./pages/TokenDetailPage";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <AppWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/token/:symbol" element={<TokenDetailPage />} />
            </Routes>
        </AppWrapper>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
