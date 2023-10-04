import { Pressable, StyleSheet } from "react-native";
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from "../atoms/CustomText";

type NavBarBtnProps = {
  type: 'home' | 'map' | 'account' ;
  title: string;
  color?: string;
}

const NavBarBtn = ({ type, title, color }: NavBarBtnProps): JSX.Element => {

  const icons: {[key: string]: JSX.Element} = {
    home: <Entypo name="home" size={28} color={color} />,
    map: <Ionicons name="location-sharp" size={28} color={color} />,
    account: <MaterialCommunityIcons name="account" size={28} color={color} />
  }

  return(
    <Pressable style={styles.container}>
      {icons[type]}
      {/* 
      <CustomText text={title} type='body2' />
      */}
    </Pressable>
  );
}

export default NavBarBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});