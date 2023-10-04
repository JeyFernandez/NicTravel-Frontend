import React from "react";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { dataSugerencias } from "../data/sugerencias";
import NavBar from "../organisms/NavBar";

const Home = (): JSX.Element => {
  const handleSearchPress = () => {
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
      >
        <View style={styles.searchSection}>
          <TextInput
            placeholder="Buscar en NicTravel"
            style={styles.searchInput}
            placeholderTextColor="gray"
          />
          
          <TouchableOpacity style={styles.searchIcon} onPress={handleSearchPress}>
            <AntDesign name="search1" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.suggestionsContainer}>
          <View style={styles.suggestionsText}>
            <Text style={styles.boldText}>Sugerencias</Text>
          </View>
          <TouchableOpacity style={styles.seeAllText} onPress={() => console.log("Ver todo presionado")}>
            <Text style={styles.greenText}>Ver todo</Text>
            <AntDesign name="right" size={18} color="green" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal style={styles.categoryScrollView}
          showsHorizontalScrollIndicator={false}
        >
          {dataSugerencias.map((item, index) => (
            <View key={index} style={styles.categoryContainer}>
              <Image source={{ uri: item.image }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
        

      </ScrollView>
      <NavBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    //borderWidth: 4,
    //borderColor: 'red',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 0,
  },
  searchSection: {
    flexDirection: "row",
    margin: 2,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    padding: 10,

    flex: 1,
    height: 50,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  suggestionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  suggestionsText: {
    flex: 1,
  },
  seeAllText: {
    flexDirection: "row",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  greenText: {
    color: "green",
    marginRight: 5,
    fontWeight: "bold",
  },
  categoryScrollView: {
    marginTop: 20,
  },
  categoryContainer:  {
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
