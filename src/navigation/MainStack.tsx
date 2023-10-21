import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "../components/screens/LogIn";
import Register from '../components/screens/Register';
import BottomTabs from "./BottomTabs";
import MyBusiness from "../components/screens/MyBusiness";
import Hoteles from "../components/screens/Hotels";

import HotelPergola from '../components/screens/HotelPergola';
import Reservation from "../components/screens/Reservation";
import PaymentForm from "../components/screens/Pay";
import Bedrooms from "../components/screens/ReserverdRooms";
import ReservedRooms from "../components/screens/Bedrooms";

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
          name="MyBusiness"
          component={MyBusiness}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Hoteles"
          component={Hoteles}
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
        name="Bedrooms"
        component={Bedrooms}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="ReservedRooms"
        component={ReservedRooms}
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