import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, } from 'react-native';
import axios from "axios";

import apiConfig from "../../../api/apiConfig";
import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from "../molecules/Button";

interface Props {
  navigation: any
}

const SignInForm = ({ navigation }: Props): JSX.Element => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<any>();

  async function chekUserCredentials(email: string, password: any) {
    await axios.post(`${apiConfig.baseURL}auth/login`, {
      email: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiConfig.apiKey}`,
      },
    })
      .then((response) => {
        navigation.navigate('Tabs');
        console.log(response.data);
      }) 
      .catch(() => {
        alert(`
          Upss, parece que ha habido un problema con sus credenciales, intentelo nuevamente!
        `);
      })
  }

  return (
    <View style={styles.container}>

      <CustomText text='Acceder' type='heading2' />
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

      <View style={styles.buttonsWrapper}>
        <Button
          title='Registrarme'
          type='link'
          onClick={() => navigation.navigate('Register')}
        />
        <Button
          title='Acceder'
          type='meddium'
          onClick={() => chekUserCredentials(email, password)}
        />
      </View>
    </View>
  );
}

export default SignInForm;

const styles = StyleSheet.create({
  buttonsWrapper: {
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  container: {
    backgroundColor: 'white',
    width: '90%',
    height: '40%',
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