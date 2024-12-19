import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: linear-gradient(90deg, #2a5bd7, #4c51bf);
  color: #ffffff;
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;



const Header = () => {
  return <HeaderWrapper>Decentralized Price Oracles for SX Network</HeaderWrapper>;
};

export default Header;
