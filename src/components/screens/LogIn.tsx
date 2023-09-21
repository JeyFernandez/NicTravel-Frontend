import { View, Image, Button, StyleSheet } from "react-native";
import SignInForm from "../organisms/SignInForm";

interface Props {
  navigation: any
}

const LogIn = ({ navigation }: Props): JSX.Element => {
  return(
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} />
      <SignInForm />
      <Button 
        title="Ir al inicio" 
        onPress={() => navigation.navigate('Home')} 
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