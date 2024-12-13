import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const PriceChart = ({ data }) => {

  const chartData = {
    labels: data.map((entry) => entry.time),
    datasets: [
      {
        label: "Price",
        data: data.map((entry) => entry.price),
        fill: true,
        backgroundColor: "rgba(138, 43, 226, 0.2)", // Gradient fill
        borderColor: "#8a2be2",
        pointRadius: 4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#8a2be2",
      },
    ],
  };
  

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `$${context.raw.toFixed(2)}`,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Add smooth curve
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "#e0e0e0" },
      },
      y: {
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "#e0e0e0" },
      },
    },
  };
  
  

  return (
    <ChartWrapper>
      <Line data={chartData} options={options} />
    </ChartWrapper>
  );
};

export default PriceChart;
