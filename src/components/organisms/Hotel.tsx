import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import CustomText from "../atoms/CustomText";
import { Hotel } from '../../interfaces/interface';
import apiConfig from "../../../api/apiConfig";

// Definición de tipo para la respuesta de la API
interface ApiResponse {
  data: {
    hotels: Hotel[];
  };
}

const Hotels = (): JSX.Element => {
  const [hotelsData, setHotelsData] = useState<Hotel[]>([]);
  useEffect(() => {
    const API_BASE_URL = apiConfig.baseURL;
    const API_KEY = apiConfig.apiKey;
    axios.get<ApiResponse>(`${API_BASE_URL}hoteles`, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setHotelsData(response.data.data.hotels);
      })
      .catch((error) => {
        console.log(`error al obtener los hoteles: ${error}`);
      });
  }, []);

  return (
    <View>
      <CustomText type="heading2" text="hoteles" />
      <FlatList
        data={hotelsData}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Hotels;
