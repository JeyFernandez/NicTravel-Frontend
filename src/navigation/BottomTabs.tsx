import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../components/screens/Home';
import Map from '../components/screens/Map';
import NavBarBtn from '../components/molecules/NavBarBtn';
import Account from '../components/screens/Account';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return(
    <Tab.Navigator
      initialRouteName='home'
      activeColor='#55b1c8'
      barStyle={{
        height: 80,
        borderTopLeftRadius: 20,
        ...styles.shadow,
      }}
    >
      <Tab.Screen 
        name='Inicio' 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <NavBarBtn type='home' title='Inicio' color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Mapa' 
        component={Map} 
        options={{
          tabBarIcon: ({ color }) => (
            <NavBarBtn type='map' title='Mapa' color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Cuenta'
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <NavBarBtn type='account' title='Cuenta' color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },     
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,      
  }
})