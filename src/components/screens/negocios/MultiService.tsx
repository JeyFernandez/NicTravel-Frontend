import React from "react"
import { View , StyleSheet} from "react-native"
import apiConfig from "../../../../api/apiConfig"
import axios from "axios"
import CustomText from '../../atoms/CustomText';
import { TextInput } from "react-native-paper";
import Button from "../../molecules/Button";

const MultiService = ():JSX.Element => {
    const [state, setstate] = React.useState({
        name: "",
        description: "",
        service:'',
        availableDays: "",
        availableHours: "",
        location: "",
        descriptionBusiness: '',
    })
    const API_BASE_URL = apiConfig.baseURL;
    const API_KEY = apiConfig.apiKey;
    const handleChange = (fieldName:string, value:string) => {
        setstate({ ...state, [fieldName]: value });
    }
    async function handlePost() {
        console.log(handlePost.name)
        try {
            const response = await axios.post(`${API_BASE_URL}multicervice`, state, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
            });
            
            console.log(response.request);
        }
        catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={styles.form}>
            <CustomText type="heading2" text="Formulrio de Multiservicios"/>
            <View style={styles.inputs}>
            <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={state.name}
            onChangeText={(text) => handleChange("name", text)}
            />
                <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={state.description}
                onChangeText={(text) => handleChange("description", text)}
                />
               
                <TextInput
                style={styles.input}
                placeholder="Servicios"
                value={state.service}
                onChangeText={(text) => handleChange("service", text)}
                />
               
                <TextInput
                style={styles.input}
                
                placeholder="Días disponibles"
                value={state.availableDays}
                onChangeText={(text) => handleChange("availableDays", text)}
                />
              
                <TextInput
                style={styles.input}
                placeholder="Horario de atención"
                value={state.availableHours}
                onChangeText={(text) => handleChange("availableHours", text)}
                />
               
                <TextInput
                style={styles.input}
                placeholder="Ubicación"
                value={state.location}
                onChangeText={(text) => handleChange("location", text)}
                />
             
                <TextInput
                style={styles.input}
                placeholder="Descripción del negocio"
                value={state.descriptionBusiness}
                onChangeText={(text) => handleChange("descriptionBusiness", text)}
                />
            </View>
            <Button type="meddium" title="Enviar" onClick={handlePost} />
        </View>
    )
}

export default MultiService

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