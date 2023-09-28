import { Text, StyleSheet } from "react-native";

type TextProps = {
  type: 'heading2' | 'body1' | 'body2';
  text: string;
};

/*Text types:
Heading1, Heading2
Body1, Body2
Link*/

const CustomText = ({ type, text }: TextProps): JSX.Element => {

  const textStyle = styles[type];

  return(
    <Text style={textStyle}>
      { text }
    </Text>
  );
}

export default CustomText;

const styles = StyleSheet.create({
  heading2: {
    fontWeight: '600',
    fontSize: 25,
  },
  body1: {

  },
  body2: {
    fontSize: 18
  }
});