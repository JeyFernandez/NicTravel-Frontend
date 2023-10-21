import React from "react";
import { TextInput, StyleSheet } from "react-native";

type inputProp = {
  placeHolder: string,
  inputType: string,
  setState: Function,
}

const Input = ({ placeHolder, inputType, setState }: inputProp): JSX.Element => {

  /*const handleClick = () => {
    if(setState) {
      setState();
    }
  }*/

  return(
    <TextInput 
      placeholder={placeHolder} 
      style={styles.inputStyles}
      secureTextEntry={inputType === 'password' ? true : false}
      keyboardType={inputType === 'email' ? 'email-address' : 'default'}
      onChangeText={(key: any) => setState(key)}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  inputStyles: {
    width: 300,
    height: 54,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    }
});