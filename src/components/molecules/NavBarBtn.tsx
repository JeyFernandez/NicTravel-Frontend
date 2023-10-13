import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CustomText from '../atoms/CustomText';

type NavBarBtnProps = {
  type: 'home' | 'map' | 'account';
  isFocused: boolean;
}

const NavBarBtn = ({ type, isFocused }: NavBarBtnProps): JSX.Element => {

  const focusedValidation = isFocused ? '#55b1c8' : 'gray'

  const icons: { [key: string]: JSX.Element } = {
    home: <>
      <Entypo name="home" size={28} color={focusedValidation} />
      <CustomText text='Inicio' type='body1' color={focusedValidation} />
    </>,
    map: <>
      <Ionicons name="location-sharp" size={28} color={focusedValidation} />
      <CustomText text='Mapa' type='body1' color={focusedValidation} />
    </>,
    account: <>
      <MaterialCommunityIcons name="account" size={28} color={focusedValidation} />
      <CustomText text='Cuenta' type='body1' color={focusedValidation} />
    </>
  }

  return icons[type];
}

export default NavBarBtn;