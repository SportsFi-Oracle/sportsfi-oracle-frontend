import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background: ${({ theme }) => theme.secondary};
  padding: 20px;
  text-align: center;
  color: #e0e0e0;
  font-size: 14px;
  border-top: 1px solid ${({ theme }) => theme.cardBorder};

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #28a745; /* Change to green on hover */
      text-decoration: underline;
    }
  }
`;


const Footer = () => {
  return (
    <FooterWrapper>
      <p>Built by Prediction Labs &copy; 2024</p>
      <p>
        <a href="/docs" style={{ color: "#8a2be2", textDecoration: "none" }}>
          Documentation
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/sports-oracle"
          style={{ color: "#8a2be2", textDecoration: "none" }}
        >
          GitHub
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
