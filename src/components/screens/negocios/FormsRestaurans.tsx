import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import CustomText from "../../atoms/CustomText";
import Button from "../../molecules/Button";
import apiConfig from "../../../../api/apiConfig";
import axios from "axios";
const FormsRestaurans = (): JSX.Element => {
    const [formData, setFormData] = useState({
        name: "",
        descriptions: "",
        phoneNumber: "",
        timeOpen: "",
        timeClosed: "",
        address: "",
    });
    const API_BASE_URL = apiConfig.baseURL;
    const API_KEY = apiConfig.apiKey;
    const handleChange = (fieldName:string, value:string) => {
        setFormData({ ...formData, [fieldName]: value });
    };
    async function handlePost() {
        try {
            const response = await axios.post(`${API_BASE_URL}restaurants`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
            });
            console.log(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
  return (
    <View style={styles.form}>
        <CustomText type="heading2" text= "Formulario de restaurantes"/>
        <View style={styles.inputs}>
            <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={formData.name}
            onChangeText={(text) => handleChange("name", text)}
            />
            <TextInput
            style={styles.input}
            placeholder="Descripción"
            value={formData.descriptions}
            onChangeText={(text) => handleChange("descriptions", text)}
            />
            <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
            value={formData.phoneNumber}
            onChangeText={(text) => handleChange("phoneNumber", text)}
            />
            <TextInput
            style={styles.input}
            placeholder="Hora de apertura"
            value={formData.timeOpen}
            onChangeText={(text) => handleChange("timeOpen", text)}
            />
            <TextInput
            style={styles.input}
            placeholder="Hora de cierre"
            value={formData.timeClosed}
            onChangeText={(text) => handleChange("timeClosed", text)}
            />
            <TextInput
            style={styles.input}
            placeholder="Dirección"
            value={formData.address}
            onChangeText={(text) => handleChange("address", text)}
            />
         
        </View>
        <Button type="meddium" title="Enviar" onClick={handlePost} />
    </View>
  );
};

export default FormsRestaurans;

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
      },
})
