import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";


const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 15px;
  padding: 20px;
  margin: 15px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  animation: ${bounce} 0.5s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.1);
  }
`;


const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const Data = styled.p`
  margin: 5px 0;
  font-size: 18px;
`;

const AssetCard = ({ symbol, price, volume, liquidity }) => {
  return (
    <Card>
      <Title>{symbol}</Title>
      <Data>Price: ${price.toFixed(2)}</Data>
      <Data>24H Volume: ${volume.toLocaleString()}</Data>
      <Data>Liquidity: ${liquidity.toLocaleString()}</Data>
    </Card>
  );
};

export default AssetCard;
