import React from "react";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const handleSearchPress = () => {
};

const Search = (): JSX.Element => {
    return (
        <View style={styles.mainContainer}>

            <ScrollView style={styles.container}>
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


            </ScrollView>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 30,
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
});