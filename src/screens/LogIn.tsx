import { View, Text, Button } from "react-native";

interface Props {
  navigation: any
}

const LogIn = ({ navigation }: Props) => {
  return(
    <View>
      <Text>Hello from logIn screen</Text>
      <Button 
        title="Ir al inicio" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

export default LogIn;