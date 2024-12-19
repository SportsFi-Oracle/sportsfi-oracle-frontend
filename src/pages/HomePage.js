import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAssetData, fetchPriceTableData } from "../api";
import AssetCard from "../components/AssetCard";
import GlobalStats from "../components/GlobalStats";
import PriceTable from "../components/PriceTable";

const PageWrapper = styled.div`
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

const HomePage = () => {
  const [assets, setAssets] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [globalStats, setGlobalStats] = useState({ totalVolume: 0, totalLiquidity: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assetData = await fetchAssetData();
        const priceTableData = await fetchPriceTableData();

        setAssets(assetData);
        setPriceData(priceTableData);

        const totalVolume = assetData.reduce((sum, asset) => sum + asset.volume_24h, 0);
        const totalLiquidity = assetData.reduce((sum, asset) => sum + asset.liquidity, 0);
        setGlobalStats({ totalVolume, totalLiquidity });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageWrapper>
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
      <PriceTable data={priceData} />
    </PageWrapper>
  );
};

export default HomePage;
