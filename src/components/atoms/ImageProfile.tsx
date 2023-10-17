import React from 'react';
import { Image, StyleSheet } from 'react-native';
type ImageUserProps = {
    type : 'middle' | 'small';
    uri: string;
};

const ImageUser = ({ type, uri }: ImageUserProps): JSX.Element => {
    return (
        <Image
            style={styles[type]}
            source={{ uri }}
        />  
    )
}

export default ImageUser;

const styles = StyleSheet.create({
  middle: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  small: {
    width: 98,
    height: 98,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#fff",
  },
});

