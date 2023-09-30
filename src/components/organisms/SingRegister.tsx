import { View, StyleSheet } from "react-native";
import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from "../molecules/Button";


const SignRegister = (): JSX.Element => {
  const handleButtonClick = () => {
  };

  return(
    <View style={styles.container}>
      <CustomText text='Registrarme' type='heading2' />
      <Input placeHolder="usuario" inputType='email' />
      <Input placeHolder="correo electrónico o usuario" inputType='email' />
      <Input placeHolder="confirmar contraseña" inputType='password' />
      <Input placeHolder="contraseña" inputType='password' />
      <Button
       title='Registarme'
       type='meddium' />
    </View>
  );
}

export default SignRegister;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: '60%',
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