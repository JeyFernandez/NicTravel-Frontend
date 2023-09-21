import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

const Home = () => {
  return(
    <View 
      style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <StatusBar />
      <Text>Hello from Home View</Text>
    </View>
  );
}

export default Home;