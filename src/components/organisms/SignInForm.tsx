import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, } from 'react-native';

import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from "../molecules/Button";

interface Props {
  navigation: any
}

const SignInForm = ({ navigation }: Props): JSX.Element => {
  return (
    <View style={styles.container}>

      <CustomText text='Acceder' type='heading2' />
      <Input placeHolder="correo electrónico o usuario" inputType='email' />
      <Input placeHolder="contraseña" inputType='password' />

      <View style={styles.buttonsWrapper}>
        <Button
          title='Registrarme'
          type='link'
          onClick={() => {navigation.navigate('Register')}}
        />
        <Button
          title='Acceder'
          type='meddium'
          onClick={() => { }}
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