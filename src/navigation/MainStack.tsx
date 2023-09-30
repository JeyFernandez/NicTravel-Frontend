import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "../components/screens/LogIn";
import Register from '../components/screens/Register';
import Home from "../components/screens/Home";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LogIn" 
          component={LogIn} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;