import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
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

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textDark};
  text-align: center;
`;

const StatsAndChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Allocate more space for the chart */
  gap: 20px;
`;

const SubHeader = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textLight};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Statistic = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.textLight};

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.textDark};
  }
`;

const ChartWrapper = styled.div`
  height: 500px; /* Increase height */
  background: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const ApiInfoWrapper = styled.div`
  margin-top: 20px;
  background: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ApiInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textLight};
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.textDark};
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`;

const mockData = {
  "SX/USD": {
    price: 0.18,
    volume_24h: 1200000,
    liquidity: 450000,
    network: "SX Network",
    lastUpdate: "2 hours ago",
    chartData: [0.18, 0.19, 0.17, 0.18, 0.20, 0.19],
    labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    apiInfo: {
      productType: "Price Feed",
      feedId: "0xabc12345",
      documentation: "https://example.com/sx-usd-docs",
    },
  },
  "AX/USD": {
    price: 0.04,
    volume_24h: 700000,
    liquidity: 300000,
    network: "SX Network",
    lastUpdate: "3 hours ago",
    chartData: [0.04, 0.042, 0.039, 0.041, 0.043, 0.042],
    labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    apiInfo: {
      productType: "Price Feed",
      feedId: "0xdef67890",
      documentation: "https://example.com/ax-usd-docs",
    },
  },
  USDC: {
    price: 1.0,
    volume_24h: 8000000,
    liquidity: 15000000,
    network: "SX Network",
    lastUpdate: "1 hour ago",
    chartData: [1, 1, 1, 1, 1, 1],
    labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    apiInfo: {
      productType: "Price Feed",
      feedId: "0xghijk456",
      documentation: "https://example.com/usdc-docs",
    },
  },
};

const TokenDetailPage = () => {
  const { symbol } = useParams();
  const tokenData = mockData[symbol];

  if (!tokenData) {
    return (
      <PageWrapper>
        <Header>Token Not Found</Header>
        <p>The requested token does not exist.</p>
      </PageWrapper>
    );
  }

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
  

  return (
    <PageWrapper>
      <Header>{symbol} Price Feed</Header>
      <Grid>
        <Card>
          <SubHeader>Current Statistics</SubHeader>
          <Statistic>
            Price: <span>${tokenData.price.toFixed(2)}</span>
          </Statistic>
          <Statistic>
            24H Volume: <span>${tokenData.volume_24h.toLocaleString()}</span>
          </Statistic>
          <Statistic>
            Liquidity: <span>${tokenData.liquidity.toLocaleString()}</span>
          </Statistic>
          <Statistic>
            Network: <span>{tokenData.network}</span>
          </Statistic>
          <Statistic>
            Last Updated: <span>{tokenData.lastUpdate}</span>
          </Statistic>
        </Card>
        <ChartWrapper>
          <SubHeader>Price Chart</SubHeader>
          <Line data={chartData} options={chartOptions} />
        </ChartWrapper>
      </Grid>
      <ApiInfoWrapper>
        <SubHeader>Product/API Information</SubHeader>
        <ApiInfoRow>
          <p>Product Type:</p>
          <span>{tokenData.apiInfo.productType}</span>
        </ApiInfoRow>
        <ApiInfoRow>
          <p>Feed ID:</p>
          <span>{tokenData.apiInfo.feedId}</span>
        </ApiInfoRow>
        <ApiInfoRow>
          <p>Documentation:</p>
          <a href={tokenData.apiInfo.documentation} target="_blank" rel="noopener noreferrer">
            {tokenData.apiInfo.documentation}
          </a>
        </ApiInfoRow>
      </ApiInfoWrapper>
    </PageWrapper>
  );
};

export default TokenDetailPage;
