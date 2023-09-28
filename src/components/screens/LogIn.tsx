import { View, Image, StyleSheet } from "react-native";
import SignInForm from "../organisms/SignInForm";

import Button from "../molecules/Button";

interface Props {
  navigation: any
}

const LogIn = ({ navigation }: Props): JSX.Element => {
  return(
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} />
      <SignInForm />
      <Button 
        type="link" 
        title="Ir al Inicio" 
        onClick={() => navigation.navigate('Home')}  
      />
    </View>
  );
}

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});