import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

type keyboardAvoiding = {
  children: JSX.Element;
}

const AvoidKeyboard = ({ children }: keyboardAvoiding): JSX.Element => {
  return(
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.avoidingContainer}
      keyboardVerticalOffset={10}
    >
      { children }
    </KeyboardAvoidingView>
  );
}

export default AvoidKeyboard;

const styles = StyleSheet.create({
  avoidingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});