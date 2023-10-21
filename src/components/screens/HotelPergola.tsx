import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { hotel } from '../../data/data';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

interface Props {
    navigation: any
}

const HotelPergola = ({ navigation }: Props): JSX.Element => {
    const firstHotel = hotel[0];

    const handleReservePress = () => {
        navigation.navigate('Reservation')
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: firstHotel.image }} style={styles.hotelImage} />
                <Text style={styles.hotelName}>La Pergola, Granada</Text>
                <Text style={styles.description}>
                    Hotel La Pergola está ubicado en Centro Histórico de Granada - La Gran Sultana
                </Text>

                <Text style={styles.sectionTitle}>Servicios</Text>

                <View style={styles.serviciosContainer}>
                    <View style={styles.column}>
                        <View style={styles.servicioItem}>
                            <FontAwesome name="bed" size={24} color="black" />
                            <Text style={styles.servicioText}>Habitación</Text>
                        </View>

                        <View style={styles.servicioItem}>
                            <FontAwesome5 name="wine-glass-alt" size={24} color="black" />
                            <Text style={styles.servicioText}>Bar</Text>
                        </View>

                        <View style={styles.servicioItem}>
                            <FontAwesome name="snowflake-o" size={24} color="black" />
                            <Text style={styles.servicioText}>Aire Acondicionado</Text>
                        </View>
                    </View>

                    <View style={styles.column}>
                        <View style={styles.servicioItem}>
                            <FontAwesome name="spoon" size={24} />
                            <Text style={styles.servicioText}>Desayuno Incluido</Text>
                        </View>

                        <View style={styles.servicioItem}>
                            <FontAwesome5 name="swimmer" size={24} color="black" />
                            <Text style={styles.servicioText}>Piscina</Text>
                        </View>

                        <View style={styles.servicioItem}>
                            <FontAwesome5 name="wifi" size={24} color="black" />
                            <Text style={styles.servicioText}>Wifi</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Detalles</Text>
                    <Text style={styles.detalleText}>
                        El Hotel La Pergola está ubicado en el centro histórico de Granada - La gran sultana - a solo
                        tres cuadras del parque central, cuatro del gran lago y a solo una cuadra de la calle peatonal
                        La Calzada, la más apreciada de nuestros visitantes por sus numerosos bares y restaurantes.
                        Le ofrecemos un lugar acogedor y tranquilo con atención exclusiva y servicio de calidad.
                    </Text>
                </View>

                <TouchableOpacity style={styles.reserveButton} onPress={handleReservePress}>
                    <Text style={styles.buttonText}>Reservar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    hotelImage: {
        width: 340,
        height: 180,
        borderRadius: 10,
    },
    hotelName: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    serviciosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    column: {
        alignItems: 'center',
    },
    servicioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    servicioText: {
        marginLeft: 8,
        textAlign: 'center',
        fontSize: 16,
    },
    detalleText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'justify',
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

export default HotelPergola;
