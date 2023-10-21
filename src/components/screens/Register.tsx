import React from "react";
import { View, Image, StyleSheet } from "react-native";
import SignRegister from "../organisms/SingRegister";

import AvoidKeyboard from "../../hooks/AvoidKeyboard";

interface Props {
  navigation: any
}

const Register = ({ navigation }: Props): JSX.Element => {
  return(
    <AvoidKeyboard>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} />
        <SignRegister navigation={navigation} />
      </View>
    </AvoidKeyboard>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    height: 740, //This sould be % for the devices's different dimensions
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});