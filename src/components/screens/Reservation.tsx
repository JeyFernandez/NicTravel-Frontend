import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from "react-native";

interface Props {
    navigation: any
}

const Reservation = ({ navigation }: Props): JSX.Element => {

    const handlePayPress = () => {
        navigation.navigate('PaymentForm')
    };

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaLlegada, setLlegada] = useState("");
    const [fechaSalida, setSalida] = useState("");
    const [cantidadPersonas, setCantidadPersonas] = useState("1");
    const [numeroHabitaciones, setNumeroHabitaciones] = useState("1");

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hotel La Pérgola</Text>
            <Text style={styles.precio}>Total: $200</Text>
            <View style={styles.datosPersonales}>
                <Text style={styles.label}>Nombre completo:</Text>
                <TextInput
                    value={nombre}
                    onChangeText={text => setNombre(text)}
                    style={styles.input}
                />
                <Text style={styles.label}>Correo electrónico:</Text>
                <TextInput
                    value={correo}
                    onChangeText={text => setCorreo(text)}
                    style={styles.input}
                />
                <Text style={styles.label}>Teléfono:</Text>
                <TextInput
                    value={telefono}
                    onChangeText={text => setTelefono(text)}
                    style={styles.input}
                />
                <Text style={styles.label}>Fecha de llegada:</Text>
                <TextInput
                    value={fechaLlegada}
                    onChangeText={text => setLlegada(text)}
                    style={styles.input}
                />
                <Text style={styles.label}>Fecha de salida:</Text>
                <TextInput
                    value={fechaSalida}
                    onChangeText={text => setSalida(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.datosReserva}>
                <Text style={styles.label}>Cantidad de personas:</Text>
                <TextInput
                    value={cantidadPersonas}
                    onChangeText={text => setCantidadPersonas(text)}
                    style={styles.input}
                    keyboardType="numeric"
                />
                <Text style={styles.label}>Número de habitaciones:</Text>
                <TextInput
                    value={numeroHabitaciones}
                    onChangeText={text => setNumeroHabitaciones(text)}
                    style={styles.input}
                    keyboardType="numeric"
                />
            </View>

            <TouchableOpacity style={styles.reserveButton} onPress={handlePayPress}>
                <Text style={styles.buttonText}>pagar</Text>
            </TouchableOpacity>

        </View >
    );
};

export default Reservation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
    },
    precio: {
        fontSize: 18,
        color: "#000",
        margin: 10,
    },
    datosPersonales: {
        width: 300,
        margin: 10,
    },
    datosReserva: {
        width: 300,
        margin: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 5,
    },
    input: {
        width: 250,
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    reserveButton: {
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
    },
});
