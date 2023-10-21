import React from 'react';
import { ScrollView, StyleSheet, View, Button, Text } from 'react-native';

import Search from "../molecules/Search";
import Suggestions from '../organisms/Suggestions';
import CardsSuggestions from "../organisms/CardsSuggestions";
import CardsHotels from "../organisms/CardsHotels";


const Home = (): JSX.Element => {
  return (
    <View style={styles.mainContainer}>

      <ScrollView style={styles.container}>
        <Search />
        <Suggestions />
        <CardsSuggestions />
        <CardsHotels />
      </ScrollView>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
});
