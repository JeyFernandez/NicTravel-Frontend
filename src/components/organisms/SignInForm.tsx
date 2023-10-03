import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from "../molecules/Button";

const SignInForm = (): JSX.Element => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <CustomText text='Acceder' type='heading2' />
      <Input placeHolder="correo electrónico o usuario" inputType='email' />
      <Input placeHolder="contraseña" inputType='password' />

      <View style={styles.acceder}>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonClick}>
            <Text style={styles.buttonText}>Registrarme</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
            <Button
              title='Acceder'
              type='meddium'
              onClick={handleButtonClick}
            />
        </View>

      </View>

    </View>
  );
}

export default SignInForm;

const styles = StyleSheet.create({
  acceder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginHorizontal: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
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