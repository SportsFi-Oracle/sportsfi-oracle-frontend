import axios from "axios";
import assetData from "./data.json"
import priceAssetData from "./PriceTableData.json"
const API_URL = "<BACKEND_URL>";

export const fetchAssetData = async () => {
    try {
        return assetData
    } catch (error) {
        console.error(`Error occurred while fetching assets ${error}`)
        return [];
    }
    
}

export const fetchPriceTableData = async () => {

    try {
        return priceAssetData
    } catch (error) {
        console.error(`Error occurred while fetching assets ${error}`)
        return [];
    }
}