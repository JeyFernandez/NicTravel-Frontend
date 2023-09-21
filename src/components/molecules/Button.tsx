import { Pressable, StyleSheet } from "react-native";

import CustomText from "../atoms/CustomText";

type ButtonProps = {
  type: string,
  title: string,
}

/*Button types:
small, medium, large
Link*/

const Button = ({ type, title }: ButtonProps): JSX.Element => {
  return(
    <Pressable style={styles.meddium}>
      <CustomText text={title} type='body2' />
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  meddium: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0EC6A2',
    borderRadius: 10,
  }
});