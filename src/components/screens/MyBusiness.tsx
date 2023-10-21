import React from 'react';
import { View,  StyleSheet } from 'react-native';
import CustomText from '../atoms/CustomText';
const MyBusiness = ():JSX.Element => {
  return (
    <View style={styles.container} >
      <CustomText type="heading2" text="Mis Negocios" />
    </View>
  );
}

export default MyBusiness;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
 })