import { Pressable, StyleSheet } from "react-native";
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from "../atoms/CustomText";

type NavBarBtnProps = {
  type: 'home' | 'map' | 'account' ;
  title: string;
}

const NavBarBtn = ({ type, title }: NavBarBtnProps): JSX.Element => {

  const icons: {[key: string]: JSX.Element} = {
    home: <Entypo name="home" size={30} color='black' />,
    map: <Ionicons name="location-sharp" size={30} color='black' />,
    account: <MaterialCommunityIcons name="account" size={30} color='black' />
  }

  return(
    <Pressable style={styles.container}>
      {icons[type]}
      <CustomText text={title} type='body2' />
    </Pressable>
  );
}

export default NavBarBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});