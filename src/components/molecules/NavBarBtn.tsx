import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from "../atoms/CustomText";

type NavBarBtnProps = {
  type: 'home' | 'map' | 'account' ;
  color?: string;
}

const NavBarBtn = ({ type, color }: NavBarBtnProps): JSX.Element => {

  const icons: {[key: string]: JSX.Element} = {
    home: <Entypo name="home" size={28} color={color} />,
    map: <Ionicons name="location-sharp" size={28} color={color} />,
    account: <MaterialCommunityIcons name="account" size={28} color={color} />
  }
  return icons[type];
}

export default NavBarBtn;