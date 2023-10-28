import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
  onPress?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

interface TextProps {
  text: string;
  data2: string;
}

export const CustomText: React.FC<TextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

interface ListProps {
  items: React.ReactNode[];
}

const CustomList: React.FC<ListProps> = ({ items }) => {
  return <ScrollView style={styles.listContainer}>{items}</ScrollView>;
};

export const ReservationButton: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <CustomButton
      text={text}
      onPress={onPress}
    />
  );
};

export const ReservationCostText: React.FC<TextProps> = ({ text }) => {
  return <CustomText text={text} data2='arre de una' />;
};

export const RoomsList: React.FC = () => {
  return (
    <CustomList
      items={[
        <CustomButton text="Agregar habitación" />,
        <CustomText text="160" data2='arre de otra'/>,
        <CustomButton text="Agregar limones a la gosería" />,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  listContainer: {
    padding: 10,
  },
});