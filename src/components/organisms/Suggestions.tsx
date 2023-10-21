import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Suggestions = (): JSX.Element => {
    return (
        <View style={styles.suggestionsContainer}>
            <View style={styles.suggestionsText}>
                <Text style={styles.boldText}>Sugerencias</Text>
            </View>
            <TouchableOpacity
                style={styles.seeAllText}
                onPress={() => console.log("Ver todo presionado")}
            >
                <Text style={styles.greenText}>Ver todo</Text>
                <AntDesign name="right" size={18} color="green" />
            </TouchableOpacity>
        </View>
    );
};

export default Suggestions;

const styles = StyleSheet.create({
    suggestionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    suggestionsText: {
        flex: 1,
    },
    boldText: {
        fontWeight: "bold",
    },
    seeAllText: {
        flexDirection: "row",
        alignItems: "center",
    },
    greenText: {
        color: "green",
        marginRight: 5,
        fontWeight: "bold",
    },

});