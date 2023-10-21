import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, FlatList } from "react-native";

import GetHotel from '../../../../api/get/GetHotel';
import { dataImages } from '../../../data/data';

const Hoteles = (): JSX.Element => {
  const hotels = GetHotel();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={hotels}
        renderItem={({ item, index }) => (
          <Pressable
            style={styles.cardHotel}
            onPress={() => {
              alert('Estamos trabajando en ello');
            }}
          >
            <View style={styles.categoryContainer}>
              <Image
                source={{ uri: dataImages[index % dataImages.length].uri }}
                style={styles.hotelImage}
              />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Hoteles;

const styles = StyleSheet.create({
  cardHotel: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  categoryContainer: {
    alignItems: "center",
  },
  hotelImage: {
    width: 340,
    height: 180,
    borderRadius: 10,
    borderWidth: 0.2,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
