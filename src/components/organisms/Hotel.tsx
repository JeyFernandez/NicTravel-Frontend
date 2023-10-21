import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from '../molecules/Button';
import GetHotel from "../../../api/get/GetHotel"; 
import apiConfig from "../../../api/apiConfig";


const Hotels = (): JSX.Element => {
  
  const data = {
    name: 'AAAAA',
    description: 'AAAAAA',
    servises: 'hotel',
    address: 'AAAAAA',
    phone: 80808080
  }
  const API_BASE_URL = apiConfig.baseURL;
  const API_KEY = apiConfig.apiKey;
  
  async function handlePost() {
    const response = await axios.post(`http://20.3.3.78:5003/hoteles`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
    })
      .then((response) => {
        console.log(response.data);
      }) 
      .catch((error) => {
        console.log(error);
      })

    console.log(response);
  } 

  return (
    <View style={styles.container}>
      <View>
      <CustomText type="heading2" text="hoteles" />
      <FlatList
        data={GetHotel()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.servises}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
      <View >
        {/* inputs para agregar un hotel */}
        <Input placeHolder="nombre" inputType='text' />
        <Input placeHolder="dirección" inputType='text' />
        <Input placeHolder="teléfono" inputType='text' />
        <Input placeHolder="servicios" inputType='text' />
        <Input placeHolder="descripción" inputType='text' />
        <Button type="meddium" 
          title="agregar hotel"
          onClick={() => handlePost()} />
      </View>
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})