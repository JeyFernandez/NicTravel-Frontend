import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ImageUser from "../atoms/ImageProfile";
import { user } from '../../data/data';
import CustomText from '../atoms/CustomText';
import BtnMyAccount from '../molecules/BtnMyAccount';


const Account = (): JSX.Element => {

  const handleClick = () => { 
    alert('Estamos trabajando en esta funcionalidad')
  }
  return (
    <View style={styles.container}>
      <View style={styles.userPrefile}>
        <ImageUser type="small" uri={user.URL} />
      </View>
      <View style={styles.infoUsers}>
        <CustomText type="heading2" text={user.name} />
        <CustomText type="body2" text={user.email} />
        <CustomText type="body2" text={user.phoneNumber} />
      </View>

      <View style={styles.BtnMyBusiness}>
        <BtnMyAccount
          type="bussiness"
          title="Mi Negocio"
          onClick={handleClick}
        />
      </View>
      <View style={styles.BtnMyBusiness}>
        <BtnMyAccount
          type="reserva"
          title="Mis Reservas"
          onClick={handleClick}
        />
      </View>

      {/* mis visitas  */}
      <View style={styles.titleVisit}>
        <CustomText type="heading2" text="Mis Visitas" />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  userPrefile: {
    marginTop: 72,

  },
  infoUsers: {
    marginTop: 24,
    alignItems: "center",
    
  },
  BtnMyBusiness: {
    marginTop: 20,
  },
  titleVisit: {
    width:"100%",
    marginTop: 20,
    paddingLeft: 20,
    alignItems :"flex-start",
  },
});

