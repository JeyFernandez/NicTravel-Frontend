import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import localStorage from "../../data/LocalStorage";
import ImageUser from "../atoms/ImageProfile";
import { user } from '../../data/data';
import CustomText from '../atoms/CustomText';
import BtnMyAccount from '../molecules/BtnMyAccount';
import CardMyVisit from "../organisms/CardMyVisit";

interface AccountProps {
  navigation: any;
}

const Account = ({navigation}:AccountProps): JSX.Element => {

  const [userData, setUserData] = useState<any>({
    name: 'Loading...',
    email: 'Loading...',
    telefono: 'Loading...'
  })

  const getUserDataStorage = (): void => {
    localStorage.load({
      key: 'sesionState',
      autoSync: true,
      syncInBackground: true,
    })
      .then((ret: { name: string, email: string, telefono: number }) => {
        setUserData({ name: ret.name, email: ret.email, telefono: ret.telefono })
      })
      .catch((err: { message: any; }) => {
        console.error(err.message);
      })
  }

  useEffect(() => {
    getUserDataStorage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userPrefile}>
        <ImageUser type="small" uri={userData.name[0]} />
      </View>
      <View style={styles.infoUsers}>
        <CustomText type="heading2" text={userData.name} />
        <CustomText type="body2" text={userData.email} />
        <CustomText type="body2" text={userData.telefono} />
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

