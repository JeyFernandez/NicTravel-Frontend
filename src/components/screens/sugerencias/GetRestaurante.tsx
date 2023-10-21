import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, FlatList } from "react-native";
import GetRestaurante from '../../../../api/get/GetResturans';
const GetRestaurants = ():JSX.Element => {
    return(
        <View style={{ flex: 1 }}>
        <FlatList 
          data={GetRestaurante()}
          renderItem={({ item }) => (
            <Pressable 
              style={styles.cardRestaurante}
              onPress={() => {alert('Estamos trabajando en ello')}}
            >
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../../../../assets/hotel.jpg')}
                  style={styles.resturantImage}
                />
                <Text style={styles.categoryText}>
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    )
}

export default GetRestaurants;
const styles = StyleSheet.create({
    cardRestaurante: {
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
    resturantImage: {
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