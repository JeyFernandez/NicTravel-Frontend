import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { hotel } from '../../data/data';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const HotelPergola = (): JSX.Element => {
    const firstHotel = hotel[0];

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: firstHotel.image }} style={styles.hotelImage} />
                <Text style={styles.hotelName}>La Pergola, Granada</Text>
                <Text style={styles.description}>
                    Hotel La Pergola está ubicado en Centro Histórico de Granada - La Gran Sultana
                </Text>

                <Text style={styles.servicesTitle}>Servicios</Text>

                <View style={styles.serviciosContainer}>
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

                <View>
                    <Text style={styles.servicesTitle}>Detalles</Text>
                    <Text>
                        El Hotel la Pergola está ubicado en el centro histórico de Granada - La gran sultana - a solo
                        tres cuadras del parque central, cuatro del gran lago y a solo una cuadra de la calle peatonal
                        La Calzada, la más apreciada de nuestros visitantes por sus numerosos bares y restaurantes.
                        Le ofrecemos un lugar acogedor y tranquilo con atención exclusiva y servicio de calidad.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    servicesTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    serviciosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    servicioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    servicioText: {
        marginLeft: 8,
        textAlign: 'center',
    },
});

export default HotelPergola;
