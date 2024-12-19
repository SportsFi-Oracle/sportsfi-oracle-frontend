import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(180deg, #121212, #18182d);
    color: #e0e0e0;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme = {
  primary: "#2a5bd7", // Chainlink Blue
  secondary: "#f5f7fa", // Light gray background
  textDark: "#1f1f1f",
  textLight: "#6b6b6b",
  accent: "#8a2be2", // Purple accent
  cardBg: "#ffffff", // White cards
  border: "rgba(0, 0, 0, 0.1)",
};

