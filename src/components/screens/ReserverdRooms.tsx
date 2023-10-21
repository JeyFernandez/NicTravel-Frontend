import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import CustomText from "../atoms/CustomText";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

interface Props {
    navigation: any;
}

const ReservedRooms = ({ }: Props): JSX.Element => {
    const imageUrl =
        "https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png";

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CustomText type="heading2" text="Habitaciones Reservadas" />

            <View style={styles.reserved}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.name}>Marcos Manuel</Text>
                    <FontAwesome name="bed" size={28} color="black" />
                    <Text style={styles.infoText}>2</Text>

                    <View style={styles.iconContainer}>
                        <Ionicons name="calendar" size={28} color="#ff6900" />
                        <Text style={styles.infoText}>21/10/23</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="check-circle" size={45} color="green" />
                    </View>
                </View>

            </View>

            <View style={styles.reserved}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.name}>Marcos Manuel</Text>
                    <FontAwesome name="bed" size={28} color="black" />
                    <Text style={styles.infoText}>2</Text>

                    <View style={styles.iconContainer}>
                        <Ionicons name="calendar" size={28} color="#ff6900" />
                        <Text style={styles.infoText}>21/10/23</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="check-circle" size={45} color="green" />
                    </View>
                </View>

            </View>

            <View style={styles.reserved}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.name}>Marcos Manuel</Text>
                    <FontAwesome name="bed" size={28} color="black" />
                    <Text style={styles.infoText}>2</Text>

                    <View style={styles.iconContainer}>
                        <Ionicons name="calendar" size={28} color="#ff6900" />
                        <Text style={styles.infoText}>21/10/23</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="check-circle" size={45} color="green" />
                    </View>
                </View>

            </View>

            <View style={styles.reserved}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.name}>Marcos Manuel</Text>
                    <FontAwesome name="bed" size={28} color="black" />
                    <Text style={styles.infoText}>2</Text>

                    <View style={styles.iconContainer}>
                        <Ionicons name="calendar" size={28} color="#ff6900" />
                        <Text style={styles.infoText}>21/10/23</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="check-circle" size={45} color="green" />
                    </View>
                </View>

            </View>

            <View style={styles.reserved}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.name}>Marcos Manuel</Text>
                    <FontAwesome name="bed" size={28} color="black" />
                    <Text style={styles.infoText}>2</Text>

                    <View style={styles.iconContainer}>
                        <Ionicons name="calendar" size={28} color="#ff6900" />
                        <Text style={styles.infoText}>21/10/23</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="check-circle" size={45} color="green" />
                    </View>
                </View>

            </View>

            <View style={styles.reserved}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.name}>Marcos Manuel</Text>
                    <FontAwesome name="bed" size={28} color="black" />
                    <Text style={styles.infoText}>2</Text>

                    <View style={styles.iconContainer}>
                        <Ionicons name="calendar" size={28} color="#ff6900" />
                        <Text style={styles.infoText}>21/10/23</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="check-circle" size={45} color="green" />
                    </View>
                </View>

            </View>

            <View style={styles.reserved}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.name}>Marcos Manuel</Text>
                    <FontAwesome name="bed" size={28} color="black" />
                    <Text style={styles.infoText}>2</Text>

                    <View style={styles.iconContainer}>
                        <Ionicons name="calendar" size={28} color="#ff6900" />
                        <Text style={styles.infoText}>21/10/23</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="check-circle" size={45} color="green" />
                    </View>
                </View>

            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
    },
    reserved: {
        height: 100,
        width: "100%",
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        backgroundColor: "#DCD7E6",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: "gray",
        marginRight: 10,
    },
    name: {
        marginRight: 10,
    },
    infoText: {
        marginRight: 10,
    },
    iconContainer: {
        marginRight: 10,
    },
});

export default ReservedRooms;
