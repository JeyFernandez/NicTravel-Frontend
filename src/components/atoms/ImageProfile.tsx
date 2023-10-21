import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
type ImageUserProps = {
    type : 'middle' | 'small';
    uri: string;
};

const ImageUser = ({ type, uri }: ImageUserProps): JSX.Element => {
    return (
      <View
        style={styles[type]}
      >
        <Text style={styles.Text}>{ uri }</Text>
      </View>
    )
}

export default ImageUser;

const styles = StyleSheet.create({
  middle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#0EC6A2",
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    width: 98,
    height: 98,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#0EC6A2",

    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'black', 
    justifyContent: 'center', 
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  }
});

