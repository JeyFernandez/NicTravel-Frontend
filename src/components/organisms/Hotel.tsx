import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
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
      <FlatList
        data={hotelsData}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Hotels;
