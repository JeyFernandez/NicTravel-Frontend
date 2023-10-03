import { View, Image, StyleSheet } from "react-native";
import SignRegister from "../organisms/SingRegister";

import Button from "../molecules/Button";

interface Props {
  navigation: any
}

const Register = ({ navigation }: Props): JSX.Element => {
  return(
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} />
      <SignRegister />
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});