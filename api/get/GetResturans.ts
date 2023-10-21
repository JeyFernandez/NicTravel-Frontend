import { useEffect, useState } from 'react';
import { Restaurants } from '../../src/interfaces/interface';
import axios from 'axios';
import apiConfig from '../apiConfig';
interface ApiResponse {
  data: {
    resturant: Restaurants[];
  };
}
 function GetRestaurante() {
    const [restauranteData, setRestauranteData] = useState<Restaurants[]>   ([]);
    useEffect(() => {
      const API_BASE_URL = apiConfig.baseURL;
      const API_KEY = apiConfig.apiKey;
      axios.get<ApiResponse>(`${API_BASE_URL}restaurants`, {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
        },
      })
        .then((response) => {
         
          setRestauranteData(response.data.data.resturant);
        })
        .catch((error) => {
          console.log(`error al obtener los restaurantes: ${error}`);
        });
    }, []);
    return restauranteData;
}

export default GetRestaurante;