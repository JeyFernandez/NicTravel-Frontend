import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";

import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from "../molecules/Button"
import apiConfig from "../../../api/apiConfig";
import PostAuth from "../../../api/post/PostAuth";

interface Props {
  navigation: any
}

const SignRegister = ({ navigation }: Props): JSX.Element => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<any>();
  const [telefono, setTelefino] = useState<number>(0);

  async function checkRegistration(name: string, email: string, password: any, tel: number) {
    await axios.post(`${apiConfig.baseURL}users`, {
      name: name,
      email: email,
      password: password,
      telefono: tel,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiConfig.apiKey}`,
      },
    })
      .then(() => {
        alert(`
          Su usuario '${name}' ha sido creado exitosamente, ahora puede iniciar su sesion
        `);
        navigation.navigate('LogIn');
      }) 
      .catch(() => {
        alert('Upss, parece que ha habido un problema con su registro');
      })
  }

  return(
    <View style={styles.container}>
      <CustomText text='Registrarme' type='heading2' />
      <Input 
        placeHolder="usuario" 
        inputType='text'
        setState={(name: string) => setName(name)}
      />
      <Input 
        placeHolder="correo electrónico o usuario" 
        inputType='email' 
        setState={(email: string) => setEmail(email)}
      />
      <Input 
        placeHolder="contraseña" 
        inputType='password' 
        setState={(password: any) => setPassword(password)}
      />
      <Input 
        placeHolder="confirmar contraseña" 
        inputType='password' 
        setState={() => {}}
      />
      <Input 
        placeHolder="telefono" 
        inputType='number' 
        setState={(telefono: number) => setTelefino(telefono)}
      />
      <Button
        title='Registarme'
        type='meddium' 
        onClick={() => checkRegistration(name, email, password, telefono)}
      />
    </View>
  );
}

export default SignRegister;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 19,
    paddingTop: 30,
    paddingBottom: 30,
  }
});