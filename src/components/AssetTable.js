import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  th {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textDark};
    font-weight: 700;
  }

  td {
    color: ${({ theme }) => theme.textLight};
  }

  tr:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const AssetTable = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>Token</th>
        <th>Price</th>
        <th>24H Volume</th>
        <th>Liquidity</th>
      </tr>
    </thead>
    <tbody>
      {data.map((asset) => (
        <tr key={asset.symbol}>
          <td>{asset.symbol}</td>
          <td>${asset.price.toFixed(2)}</td>
          <td>${asset.volume_24h.toLocaleString()}</td>
          <td>${asset.liquidity.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default AssetTable;
