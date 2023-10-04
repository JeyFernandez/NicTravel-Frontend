import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const data = [
  { name: "Hoteles", image: "https://laverdadnoticias.com/__export/1585620552106/sites/laverdad/img/2020/03/30/clalasificacion_hoteles_2.jpg_1834093470.jpg" },
  { name: "Restaurantes", image: "https://th.bing.com/th/id/R.0bbd273bab89c381a5dac5ba1baa0e05?rik=m4xXx5pSK4TQNQ&riu=http%3a%2f%2flideres.co%2fwp-content%2fuploads%2f2016%2f08%2frestaurante-2.jpg&ehk=uUgxvJ%2bIida7NcEwcqnqcjLOMByZJmZaj0Rhpdao2B0%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Lugares", image: "https://th.bing.com/th/id/R.d96ff91dac20ef266a028ed8687bdfff?rik=MkjXLPzqcZZNFA&riu=http%3a%2f%2fcos.h-cdn.co%2fassets%2f15%2f51%2f480x724%2f1450446691-gettyimages-500694179_master.jpg&ehk=TiLKKv4JG1CU91Lc15qtNvBkK%2fcSf8p9Ffa6pWwM62Y%3d&risl=&pid=ImgRaw&r=0" },
];

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

        <ScrollView horizontal style={styles.categoryScrollView}>
          {data.map((item, index) => (
            <View key={index} style={styles.categoryContainer}>
              <Image source={{ uri: item.image }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
        

      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 30,
  },
  container: {
    //flex: 1,
    padding: 20,

    //backgroundColor: 'skyblue',
    //borderWidth: 5,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
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
  categoryContainer: {
    marginRight: 20,
    alignItems: "center",
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
