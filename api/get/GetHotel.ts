import { useEffect, useState } from 'react';
import { Hotel } from '../../src/interfaces/interface';
import axios from 'axios';
import apiConfig from '../apiConfig';
interface ApiResponse {
  data: {
    hotels: Hotel[];
  };
}
 function GetHotel() {
    const [hotelsData, setHotelsData] = useState<Hotel[]>   ([]);
    useEffect(() => {
      const API_BASE_URL = apiConfig.baseURL;
      const API_KEY = apiConfig.apiKey;
      axios.get<ApiResponse>(`${API_BASE_URL}hoteles`, {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
        },
      })
        .then((response) => {
         
          setHotelsData(response.data.data.hotels);
        })
        .catch((error) => {
          console.log(`error al obtener los hoteles: ${error}`);
        });
    }, []);
    return hotelsData;
}

export default GetHotel;