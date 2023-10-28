import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomText from "../atoms/CustomText";

const Bedrooms = (): JSX.Element => {
    return (
        <ScrollView>

            <View style={styles.container}>

                <Text style={styles.headerText}>Habitaciones</Text>

                <View style={styles.price}>
                    <Text style={styles.priceText}>10</Text>
                </View>

                <View style={styles.price}>
                    <Text style={styles.priceText}>50</Text>
                </View>

            </View>

            <View style={styles.bedrooms}>
                <CustomText type="body1" text="Permitir Reservar" />
                <Text style={{ flex: 1 }}>0</Text>

            </View>

            <View style={styles.bedrooms}>
                <CustomText type="body1" text="Costo de reserva" />
                <View>
                    <Text>Día por persona</Text>
                </View>
            </View>

            <View style={styles.bedrooms}>
                <CustomText type="body1" text="Agregar habitacion" />
                <View>
                    <Text>Habitaciones actuales</Text>
                </View>
            </View>
            <View style={styles.container}>

            </View>
            
        </ScrollView>
    );
};

export default Bedrooms;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    headerText: {
        fontSize: 20,
        marginRight: 10
    },
    price: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    priceText: {
        color: "white",
        fontSize: 18,
    },
    bedrooms: {
        display: "flex",
        flexDirection: "row",
        height: 70,
        width: 365,
        backgroundColor: 'gray',
        borderRadius: 10,
        margin: 5
    },

});
