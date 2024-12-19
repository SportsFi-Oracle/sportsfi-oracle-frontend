import React from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

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

const PriceTable = ({ data }) => (
  <TableWrapper>
    <Table>
      <thead>
        <tr>
          <th>Currency Pair</th>
          <th>Network</th>
          <th>Answer</th>
          <th>Heartbeat</th>
        </tr>
      </thead>
      <tbody>
        {data.map((asset) => (
          <tr key={asset.symbol}>
            <td>{asset.symbol}</td>
            <td>{asset.network.toLocaleString()}</td>
            <td>${asset.answer.toFixed(2)}</td>
            {/* <td>${asset.liquidity.toLocaleString()}</td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  </TableWrapper>
);

export default PriceTable;
