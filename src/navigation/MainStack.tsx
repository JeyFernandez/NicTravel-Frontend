import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "../components/screens/LogIn";
import Register from '../components/screens/Register';
import BottomTabs from "./BottomTabs";
import HotelPergola from '../components/screens/HotelPergola';
import Reservation from "../components/screens/Reservation";
import PaymentForm from "../components/screens/Pay";

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
        <Stack.Screen
        name="HotelPergola"
        component={HotelPergola}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Reservation"
        component={Reservation}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="PaymentForm"
        component={PaymentForm}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
          name="Tabs"
          component={BottomTabs}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;