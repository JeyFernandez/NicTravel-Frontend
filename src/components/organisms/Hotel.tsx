import React,{useState} from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from '../molecules/Button';
import GetHotel from "../../../api/get/GetHotel"; 
import PostHoteles from "../../../api/post/PostHotel";

const Hotels = (): JSX.Element => {

  const [formData, setFormData] =useState ({
    name: "",
    address: "",
    phone: "",
    services: "",
    description: "",
  });
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

      <View>
        {/* Formulario para agregar un hotel */}
        <Input
          placeholder="Nombre"
          inputType="text"
          value={formData.name}
          onChangeText={(value) => handleInputChange("name", value)}
        />
        <Input
          placeholder="Dirección"
          inputType="text"
          value={formData.address}
          onChangeText={(value) => handleInputChange("address", value)}
        />
        <Input
          placeholder="Teléfono"
          inputType="text"
          value={formData.phone}
          onChangeText={(value) => handleInputChange("phone", value)}
        />
        <Input
          placeholder="Servicios"
          inputType="text"
          value={formData.services}
          onChangeText={(value) => handleInputChange("services", value)}
        />
        <Input
          placeholder="Descripción"
          inputType="text"
          value={formData.description}
          onChangeText={(value) => handleInputChange("description", value)}
        />
        <Button
          type="medium"
          title="Agregar hotel"
          onClick={addHotel}
        />
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