import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "../components/screens/LogIn";
import Register from '../components/screens/Register';
import BottomTabs from "./BottomTabs";
import MyBusiness from "../components/screens/MyBusiness";

import HotelPergola from '../components/screens/HotelPergola';
import Reservation from "../components/screens/Reservation";
import PaymentForm from "../components/screens/Pay";
<<<<<<< HEAD
import React from "react";
import FormsHoteles from "../components/screens/negocios/FormsHoteles";
import FormsRestaurans from "../components/screens/negocios/FormsRestaurans";
import PageNegocios from "../components/screens/negocios/PageNegocios";
import MultiService from "../components/screens/negocios/MultiService";
import GetRestaurants from "../components/screens/sugerencias/GetRestaurante";
import Hoteles from "../components/screens/sugerencias/GetHoteles";
=======
import Bedrooms from "../components/screens/ReserverdRooms";
import ReservedRooms from "../components/screens/Bedrooms";
>>>>>>> account

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
          name="HotelPergola"
          component={HotelPergola}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="FormsHoteles"
          component={FormsHoteles}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
        name="MultiService"
        component={MultiService}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="GetRestaurants"
        component={GetRestaurants}
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
        name="FormsRestaurans"
        component={FormsRestaurans}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="PageNegocios"
        component={PageNegocios}
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