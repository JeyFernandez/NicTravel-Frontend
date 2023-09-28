import { View, StyleSheet } from "react-native";
import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from "../molecules/Button";


const SignInForm = (): JSX.Element => {
  return(
    <View style={styles.container}>
      <CustomText text='Acceder' type='heading2' />
      <Input placeHolder="correo electrónico o usuario" inputType='email' />
      <Input placeHolder="contraseña" inputType='password' />
      <Button title='Acceder' type='medium' />
    </View>
  );
}

export default SignInForm;

const styles = StyleSheet.create({
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

/* Rectangle 22 

position: absolute;
width: 348px;
height: 285px;
left: 16px;
top: 264px;

background: #FFFFFF;
box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
border-radius: 19px;

*/
