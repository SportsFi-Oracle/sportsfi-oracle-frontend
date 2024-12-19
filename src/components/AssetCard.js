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
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin: 10px;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 20px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.textLight};
    font-size: 16px;
    margin: 5px 0;
  }
`;

const Icon = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 10px;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th, td {
    border: 1px solid ${({ theme }) => theme.border};
    padding: 12px;
    text-align: left;
    font-size: 16px;
  }

  th {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textDark};
    font-weight: 700;
  }

  td {
    color: ${({ theme }) => theme.textLight};
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
