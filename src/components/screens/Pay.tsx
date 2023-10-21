import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

interface Props {
    navigation: any
}

const PaymentForm = ({ navigation }: Props) => {

    const handlePayPress = () => {
        navigation.navigate('HotelPergola')
    };

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvc, setCvc] = useState("");
    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Pagar Ahora</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    placeholder="Nombre del Titular"
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    placeholder="Número de Tarjeta"
                    style={styles.input}
                    keyboardType="numeric"
                    value={cardNumber}
                    onChangeText={(text) => setCardNumber(text)}
                />
                <View style={styles.row}>
                    <TextInput
                        placeholder="MM/AA"
                        style={[styles.input, { width: "45%" }]}
                        keyboardType="numeric"
                        value={expirationDate}
                        onChangeText={(text) => setExpirationDate(text)}
                    />
                    <TextInput
                        placeholder="CVC"
                        style={[styles.input, { width: "45%" }]}
                        keyboardType="numeric"
                        value={cvc}
                        onChangeText={(text) => setCvc(text)}
                    />
                </View>
                <TextInput
                    placeholder="Correo Electrónico"
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handlePayPress}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    logo: {
        width: 50,
        height: 30,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    form: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        elevation: 3,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1FC583',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default PaymentForm;