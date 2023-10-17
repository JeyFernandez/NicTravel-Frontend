import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, Pressable } from "react-native";
import { hotel } from "../../data/data";

const CardsHotels = (): JSX.Element => {
  return (
    <Pressable>
      {hotel.map((item, index) => (
        <View style={styles.cardHotel}>

          <TouchableOpacity key={index} style={styles.categoryContainer}>
            <View>
              <Image
                source={{ uri: item.image }}
                style={styles.hotelImage}
              />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          </TouchableOpacity>

        </View>
      ))}
    </Pressable>
  );
};

export default CardsHotels;

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
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
