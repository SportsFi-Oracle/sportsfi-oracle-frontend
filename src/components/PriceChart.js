import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const ChartWrapper = styled.div`
  height: 500px; /* Increase height */
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const chartData = {
  labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
  datasets: [
    {
      label: "Price",
      data: [1.0, 1.02, 1.01, 1.03, 1.04, 1.02],
      borderColor: "#00aaff",
      backgroundColor: "rgba(0, 170, 255, 0.2)",
      pointRadius: 5,
      pointHoverRadius: 7,
      borderWidth: 3,
      tension: 0.4, // Smooth curves
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#ffffff", // Legend text color
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      backgroundColor: "#333333",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#cccccc" },
    },
    y: {
      grid: { color: "rgba(200, 200, 200, 0.2)" },
      ticks: { color: "#cccccc" },
    },
  },
};

const PriceChart = () => {
  return (
    <ChartWrapper>
      <Line data={chartData} options={chartOptions} />
    </ChartWrapper>
  );
};

export default PriceChart;
