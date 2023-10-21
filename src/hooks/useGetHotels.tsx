import { useEffect, useState } from "react";
import axios from "axios";

import apiConfig from "../../api/apiConfig";

const useGetHotels = () => {

  const [apiResponse, setApiResponse] = useState();

  const API_BASE_URL: string = apiConfig.baseURL;
  const API_KEY: string = apiConfig.apiKey;

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${API_BASE_URL}hoteles`, {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
        }
      })
      setApiResponse(response.data);
    })();
  }, []);

  return apiResponse;
}

export default useGetHotels();