import { TextInput, StyleSheet } from "react-native";

type inputProp = {
  placeHolder: string
}

const Input = ({ placeHolder }: inputProp): JSX.Element => {
  return(
    <TextInput 
      placeholder={placeHolder} 
      style={styles.inputStyles}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  inputStyles: {
    width: 300,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    }
});