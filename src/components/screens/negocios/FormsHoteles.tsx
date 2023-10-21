import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import CustomText from "../../atoms/CustomText";
import Button from "../../molecules/Button";
import apiConfig from "../../../../api/apiConfig";
import axios from "axios";

const FormsHoteles = (): JSX.Element => {
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
  }

  return (
    <View style={styles.form}>
      <CustomText type="heading2" text="Formulario de Hoteles" />
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={formData.description}
          onChangeText={(text) => handleChange('description', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Servicios"
          value={formData.services}
          onChangeText={(text) => handleChange('services', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={formData.address}
          onChangeText={(text) => handleChange('address', text)}
        />
        <TextInput  
          style={styles.input}
          placeholder="Teléfono"
          value={formData.phone}
          onChangeText={(text) => handleChange('phone', text)}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Button title="Guardar" type="meddium" onClick={handlePost} />
      </View>
    </View>
  );
};

export default FormsHoteles;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    backgroundColor: "white",
    paddingVertical: 20,
    margin:5,
    borderRadius: 10,
    marginBottom: 20,
    width: "95%",
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input: {
    marginTop: 10,
    width: "90%",
    height: 54,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
},
  buttonsWrapper: {
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "space-around",
    alignItems: "center",
  }
});
