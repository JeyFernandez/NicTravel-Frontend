import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../components/screens/Home';
import Map from '../components/screens/Map';
import NavBarBtn from '../components/molecules/NavBarBtn';
import Account from '../components/screens/Account';

const Tab = createBottomTabNavigator();

//activeColor='#55b1c8'

const BottomTabs = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { ...styles.shadow }
      }}
    >
      <Tab.Screen 
        name='Inicio' 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <NavBarBtn type='home' color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Mapa' 
        component={Map} 
        options={{
          tabBarIcon: ({ color }) => (
            <NavBarBtn type='map' color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Cuenta'
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <NavBarBtn type='account' color={color} />
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
    
    borderRadius: 40,
    marginBottom: 2,
    paddingTop: 10,
  }
})