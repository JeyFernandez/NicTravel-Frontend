import { useState } from "react";
import apiConfig from "../apiConfig";
import axios from "axios";

function PostHotel() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        services: '',
        address: '',
        phone: '',
      });
    
      const API_BASE_URL = apiConfig.baseURL;
      const API_KEY = apiConfig.apiKey;
      const handleChange = (fieldName: string, value: string) => {
        setFormData({ ...formData, [fieldName]: value });
      };
      async function handlePost() {
        try {
          const response = await axios.post(`${API_BASE_URL}hoteles`, formData, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_KEY}`,
            },
          });
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
        return formData;
      }
}

export default PostHotel;
  
