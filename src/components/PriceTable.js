import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  th,
  td {
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

  tr {
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.hover};
    }

    &.clicked {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.textLight};
    }
  }
`;

const PriceTable = ({ data }) => {
  const navigate = useNavigate();
  const [clickedRow, setClickedRow] = useState(null);

  const handleRowClick = (symbol) => {
    setClickedRow(symbol); // Track which row is clicked
    console.log("Navigating to:", `/token/${symbol}`); // Debugging output
    navigate(`/token/${symbol}`);
    };

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>Currency Pair</th>
            <th>Network</th>
            <th>Answer</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((asset) => (
            <tr
              key={asset.symbol}
              onClick={() => handleRowClick(asset.symbol)}
              className={clickedRow === asset.symbol ? "clicked" : ""}
            >
              <td>{asset.symbol}</td>
              <td>{asset.network}</td>
              <td>${asset.answer.toFixed(2)}</td>
              <td>{asset.heartbeat}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default PriceTable;
