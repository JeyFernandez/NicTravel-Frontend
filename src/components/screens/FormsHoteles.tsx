import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../atoms/CustomText";
import Input from "../atoms/Input";
import Button from "../molecules/Button";
const FormsHoteles = (): JSX.Element => {
  interface Props {
    title: string;
    type: string;
    onClick: () => void;
  }
  return (
    <View style={styles.form}>
      <CustomText type="heading2" text="Formulario de Hoteles" />
      <View style={styles.inputs}>
        <View style={styles.input}>
          <Input placeHolder="Nombre del Hotel" inputType="text" />
        </View>
        <View style={styles.input}>
          <Input placeHolder="Descripcion" inputType="text" />
        </View>
        <View style={styles.input}>
          <Input placeHolder="Servicios" inputType="text" />
        </View>
        <View style={styles.input}>
          <Input placeHolder="Direccion" inputType="text" />
        </View>
        <View style={styles.input}>
          <Input placeHolder="Telefono" inputType="text" />
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button title="Guardar" type="meddium" onClick={() => {}} />
      </View>
    </View>
  );
};
export default FormsHoteles;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingTop: 10,
  },
  buttonsWrapper: {
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
