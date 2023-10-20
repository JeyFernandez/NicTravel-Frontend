import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from '../molecules/Button';
import GetHotel from "../../../api/get/GetHotel"; 


const Hotels = (): JSX.Element => {

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
          onClick={alert}  />
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