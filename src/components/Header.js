import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: linear-gradient(90deg, #6e85d3, #8a2be2);
  padding: 20px;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;




const Header = () => {
  return <HeaderWrapper>SportsFi Token Prices</HeaderWrapper>;
};

export default Header;
