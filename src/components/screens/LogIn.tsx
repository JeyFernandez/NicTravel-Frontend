import { View, Image, StyleSheet } from "react-native";
import SignInForm from "../organisms/SignInForm";

import Button from "../molecules/Button";
import AvoidKeyboard from "../../hooks/AvoidKeyboard";

interface Props {
  navigation: any
}

const LogIn = ({ navigation }: Props): JSX.Element => {
  return(
    <AvoidKeyboard>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} />
        <SignInForm navigation={navigation} />
        <Button 
          type="link" 
          title="Explora NicTravel"
          onClick={() => navigation.navigate('Tabs')}
        />
      </View>
    </AvoidKeyboard>
  );
}

export default LogIn;

const styles = StyleSheet.create({
  container: {
    height: 740, //This sould be % for the devices's different dimensions
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});