import React from 'react';

import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { hotel } from '../../data/data';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import CustomText from '../atoms/CustomText';

interface Props {
  navigation: any;
}

const MyBusiness = ({ navigation }: Props): JSX.Element => {
  const firstHotel = hotel[0];

  const handleBedrooms = () => {
    navigation.navigate('Bedrooms')
  }
  const reservedRooms = () => {
    navigation.navigate('ReservedRooms')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: firstHotel.image }} style={styles.hotelImage} />

        <View style={styles.textHotel}>
          <Text>El Hotel la Pergola está ubicado en Centro Histórico de Granada - La Gran Sultana</Text>
        </View>

        <View style={styles.services}>
          <Text style={styles.sectionTitle}>Servicios</Text>
          <View style={styles.serviciosContainer}>

            <View style={styles.column}>
              <View style={styles.servicioItem}>
                <FontAwesome name="bed" size={24} color="black" />
                <Text style={styles.servicioText}>Habitación</Text>
              </View>

              <View style={styles.servicioItem}>
                <FontAwesome5 name="wine-glass-alt" size={24} color="black" />
                <Text style={styles.servicioText}>Bar</Text>
              </View>

              <View style={styles.servicioItem}>
                <FontAwesome name="snowflake-o" size={24} color="black" />
                <Text style={styles.servicioText}>Aire Acondicionado</Text>
              </View>
            </View>

            <View style={styles.column}>
              <View style={styles.servicioItem}>
                <FontAwesome name="spoon" size={24} />
                <Text style={styles.servicioText}>Desayuno Incluido</Text>
              </View>

              <View style={styles.servicioItem}>
                <FontAwesome5 name="swimmer" size={24} color="black" />
                <Text style={styles.servicioText}>Piscina</Text>
              </View>

              <View style={styles.servicioItem}>
                <FontAwesome5 name="wifi" size={24} color="black" />
                <Text style={styles.servicioText}>Wifi</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.textHotel}>
          <CustomText type="body1" text="Agregar sección" />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { marginHorizontal: 10 }]} onPress={handleBedrooms}>
            <Text style={styles.buttonText}>Reservaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={reservedRooms}>
            <Text style={styles.buttonText}>Administrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  );
};

export default MyBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  hotelImage: {
    width: 330,
    height: 180,
    borderRadius: 10,
  },
  textHotel: {
    height: 80,
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    borderColor: '#ABB8C3'
  },
  services: {
    height: 300,
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    borderColor: '#ABB8C3'
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  serviciosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  column: {
    alignItems: 'center',
  },
  servicioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  servicioText: {
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20
  },
});
