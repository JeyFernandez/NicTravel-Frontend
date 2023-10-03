import { StyleSheet, View } from "react-native";

import NavBarBtn from "../molecules/NavBarBtn";

const NavBar = (): JSX.Element => {
  return(
    <View style={styles.container}>
      <NavBarBtn type="home" title="Inicio" />
      <NavBarBtn type="map" title="Mapa" />
      <NavBarBtn type="account" title="Cuenta" />
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});