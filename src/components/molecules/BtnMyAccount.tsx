import React, { Pressable, StyleSheet } from "react-native";
import CustomText from "../atoms/CustomText";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

type BtnMyAccoutnProps = {
  type: "bussiness" | "reserva";
  title: string;
  iconicons: string;
  onClick: Function;
};
const BtnMyAccount = ({
  type,
  title,
  iconicons,
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
      <FontAwesome5 name={iconicons} size={24} color="black" />
    </Pressable>
  );
};
export default BtnMyAccount;
const styles = StyleSheet.create({
  bussiness: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 401,
    height: 75,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0EC6A2",
    borderRadius: 10,
  },
  reserva: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 401,
    height: 75,
    alignItems: "center",
    padding: 20,
    backgroundColor: "wite",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
});
