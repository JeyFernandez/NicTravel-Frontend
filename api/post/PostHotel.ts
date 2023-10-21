import apiConfig from "../apiConfig";
import axios from "axios";

const API_BASE_URL = apiConfig.baseURL;
const API_KEY = apiConfig.apiKey;

export async function PosHotels(formData: any) {
  try {
    const response = await axios.post(`${API_BASE_URL}hoteles`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
