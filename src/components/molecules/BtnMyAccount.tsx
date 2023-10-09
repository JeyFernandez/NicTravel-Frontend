import React, { Pressable, StyleSheet } from "react-native";
import CustomText from "../atoms/CustomText";
import { AntDesign } from "@expo/vector-icons";

type BtnMyAccoutnProps = {
  type: "bussiness" | "reserva";
  title: string;
  onClick: Function;
};
const BtnMyAccount = ({
  type,
  title,
  onClick,
}: BtnMyAccoutnProps): JSX.Element => {
  const textStyle = styles[type];
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Pressable style={textStyle} onPress={handleClick}>
          <CustomText text={title} type="body1" />
    </Pressable>
  );
};
export default BtnMyAccount;
const styles = StyleSheet.create({
  bussiness: {
    width: 401,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0EC6A2",
    borderRadius: 10,
  },
  reserva: {
    width: 401,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "wite",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
  },
});
