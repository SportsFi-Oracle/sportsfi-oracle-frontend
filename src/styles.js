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
  primary: "#8a2be2", // Vibrant purple
  secondary: "#6e85d3", // Soft blue
  accent: "#28a745", // Subtle green accent
  text: "#e0e0e0",
  cardBg: "rgba(255, 255, 255, 0.08)",
  cardBorder: "rgba(255, 255, 255, 0.15)",
};
