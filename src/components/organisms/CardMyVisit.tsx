import { Image, StyleSheet, View } from "react-native";
import CustomText from "../atoms/CustomText";
import { AntDesign } from '@expo/vector-icons';

import React from "react";
import { myVisit } from "../../data/data";

const CardMyVisit = (

) => {
  return (
    <View>
      {
        myVisit.map((item, index) => {
          return (
            <View style={styles.container}>
              <View style={styles.card} key={index}>
                <Image style={styles.image} source={{ uri: item.URL }} />
                <View>
                  <CustomText type="heading2" text={item.name} />
                  <CustomText type="body2" text={item.description} />
                  <View style={styles.containerStars}>
                    <AntDesign name="star" size={24} color="black" />
                    <CustomText type="body2" text={item.star} />
                  </View>
                </View>
              </View>
            </View>
          );
        })
      }
    </View>
  )
}
export default CardMyVisit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    marginTop: 5,
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: 5,
    flexDirection: "row",
    width: 399,
    height: 88,
  },
  image: {
    width: 109.371,
    height: 76,
    borderRadius: 10,
    marginRight: 10,
  },
  containerStars: {
    display: "flex",
    flexDirection: "row",
    
    alignItems: "center",
  }
});