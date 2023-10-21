import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Image, Text } from "react-native";
import { dataSugerencias, } from "../../data/data";

const CardsSuggestions = (): JSX.Element => {
    return (
        <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            {dataSugerencias.map((item, index) => (
                <TouchableOpacity key={index.toString()} style={styles.categoryContainer}>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.categoryImage}
                        />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
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
})