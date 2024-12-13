import axios from "axios";
import assetData from "./data.json"
const API_URL = "<BACKEND_URL>";

export const fetchAssetData = async () => {
    try {
        return assetData
    } catch (error) {
        console.error(`Error occurred while fetching assets ${error}`)
        return [];
    }
    
}