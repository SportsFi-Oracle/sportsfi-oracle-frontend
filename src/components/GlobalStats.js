import React from "react";
import styled from "styled-components";
import { FaCoins, FaWallet } from "react-icons/fa";


const StatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  h3 {
    color: ${({ theme }) => theme.primary};
    margin: 0 10px;
  }

  p {
    margin: 0;
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  padding: 20px;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  gap: 40px; /* Add spacing between items */
`;

const GlobalStats = ({ totalVolume, totalLiquidity }) => {
    return (
      <StatsWrapper>
        <StatItem>
          <FaCoins size={24} color="#8a2be2" />
          <div>
            <h3>Total Volume (24H)</h3>
            <p>${totalVolume.toLocaleString()}</p>
          </div>
        </StatItem>
        <StatItem>
          <FaWallet size={24} color="#28a745" />
          <div>
            <h3>Total Liquidity</h3>
            <p>${totalLiquidity.toLocaleString()}</p>
          </div>
        </StatItem>
      </StatsWrapper>
    );
  };

export default GlobalStats;
