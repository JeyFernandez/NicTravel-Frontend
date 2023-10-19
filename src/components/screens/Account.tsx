import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ImageUser from "../atoms/ImageProfile";
import { user } from '../../data/data';
import CustomText from '../atoms/CustomText';
import BtnMyAccount from '../molecules/BtnMyAccount';
import CardMyVisit from "../organisms/CardMyVisit";
import Hotels from "../organisms/Hotel";


const Account = (): JSX.Element => {

  const handleClick = () => { 
    alert('Estamos trabajando en esta funcionalidad')
  }
  //ir a Places 
  const handlePlaces = () => { }
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
          iconicons="store-alt"
          onClick={handleClick}
        />
      </View>
      <View style={styles.BtnMyBusiness}>
        <BtnMyAccount
          type="reserva"
          title="Mis Reservas"
          iconicons="arrow-circle-right"
          onClick={handleClick}
        />
      </View>

      {/* mis visitas  */}
      <View style={styles.titleVisit}>
        <CustomText type="heading2" text="Mis Visitas" />
      </View>
      <View>
        <Hotels/>
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
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    
    shadowRadius: 2,
    elevation: 5,
  },
  infoUsers: {
    marginTop: 24,
    alignItems: "center",
  },
  BtnMyBusiness: {
    marginTop: 20,
  },
  titleVisit: {

    width: "100%",
    marginTop: 40,
    paddingLeft: 20,
    alignItems: "flex-start",
  },
});

