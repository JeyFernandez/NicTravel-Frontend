import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ImageUser from "../atoms/ImageProfile";
import { user } from '../../data/data';
import CustomText from '../atoms/CustomText';
import BtnMyAccount from '../molecules/BtnMyAccount';
import CardMyVisit from "../organisms/CardMyVisit";
interface AccountProps {
  navigation: any;
}

const Account = ({navigation}:AccountProps): JSX.Element => {
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
          onClick={
            () => navigation.navigate('MyBusiness')
          }
        />
      </View>
      <View style={styles.BtnMyBusiness}>
        <BtnMyAccount
          type="reserva"
          title="Crear Negocio"
          iconicons="arrow-circle-right"
          onClick={()=> navigation.navigate('PageNegocios')}
        />
      </View>

      {/* mis visitas  */}
      <View style={styles.titleVisit}>
        <CustomText type="heading2" text="Mis Visitas" />
      </View>
      <View>
        <CardMyVisit/>
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

