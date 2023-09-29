import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../components/screens/Home";
import LogIn from "../components/screens/LogIn";
import Register from '../components/screens/Register';

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
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default MainStack;