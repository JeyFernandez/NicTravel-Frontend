import React from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { Pressable } from "react-native";
import CustomText from "../atoms/CustomText";

interface SugerenciasProps {
  image: string;
  name: string;
  onClick: Function;
}
const CardsSuggestions = ({
  image,
  name,
  onClick,
}: SugerenciasProps): JSX.Element => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Pressable style={styles.categoryContainer} onPress={handleClick}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.categoryImage} />
        <View style={styles.categoryText}>
          <CustomText text={name} type="body2" />
        </View>
      </View>
    </Pressable>
  );
};

export default CardsSuggestions;

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
  },
  card: {
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
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
