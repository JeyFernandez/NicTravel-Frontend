import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import CustomText from "../atoms/CustomText";
import { Hotel } from '../../interfaces/interface';
import apiConfig from "../../../api/apiConfig";

const Hotels = (): JSX.Element => {
  const [hotelsData, setHotelsData] = useState<Hotel[]>([]);
  useEffect(() => {
    const API_BASE_URL = apiConfig.baseURL;
    const API_KEY = apiConfig.apiKey;
    axios.get(`${API_BASE_URL}hoteles`, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
      },
    })
      .then((response) => {
        setHotelsData(response.data);
      })
      .catch((error) => {
        console.log(`error al obtener los hoteles: ${error}`);
      });
  }, []);

  return (
    <View>
      <CustomText type="heading2" text="Usuarios" />
      {hotelsData.map((Hotel) => (
        <View key={Hotel.id}>
          <Text>{Hotel.name}</Text>
          <Text>{Hotel.description}</Text>
          <Text>{Hotel.address}</Text>
          <Text>{Hotel.phone}</Text>
        </View>
      ))}
    </View>
  );
};

export default Hotels;
