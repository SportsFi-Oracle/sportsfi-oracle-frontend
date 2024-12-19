import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import { fetchAssetData } from "./api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AssetCard from "./components/AssetCard";
import GlobalStats from "./components/GlobalStats";
import PriceChart from "./components/PriceChart";
import PriceTable from "./components/PriceTable";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const App = () => {
  const [assets, setAssets] = useState([]);
  const [globalStats, setGlobalStats] = useState({ totalVolume: 0, totalLiquidity: 0 });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAssetData();
      setAssets(data);

      // Aggregate global stats
      const totalVolume = data.reduce((sum, asset) => sum + asset.volume_24h, 0);
      const totalLiquidity = data.reduce((sum, asset) => sum + asset.liquidity, 0);
      setGlobalStats({ totalVolume, totalLiquidity });

      // Simulate chart data (mocked)
      setChartData([
        { time: "10 AM", price: data[0]?.price || 0 },
        { time: "11 AM", price: data[0]?.price * 1.01 || 0 },
        { time: "12 PM", price: data[0]?.price * 0.99 || 0 },
      ]);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <AppWrapper>
        <GlobalStats
          totalVolume={globalStats.totalVolume}
          totalLiquidity={globalStats.totalLiquidity}
        />
        <GridWrapper>
          {assets.map((asset) => (
            <AssetCard
              key={asset.symbol}
              symbol={asset.symbol}
              price={asset.price}
              volume={asset.volume_24h}
              liquidity={asset.liquidity}
            />
          ))}
        </GridWrapper>
        <PriceTable data={assets} />
        </AppWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
