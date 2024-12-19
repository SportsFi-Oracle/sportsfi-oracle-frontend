import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background: ${({ theme }) => theme.secondary};
  padding: 10px;
  text-align: center;
  color: ${({ theme }) => theme.textLight};
  font-size: 12px;
`;

const Footer = () => (
  <FooterWrapper>© 2024 SportsFi. All Rights Reserved.</FooterWrapper>
);

export default Footer;

