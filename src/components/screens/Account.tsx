import { View, StyleSheet } from "react-native";
import CustomText from "../atoms/CustomText";

const Account = (): JSX.Element => {
  return(
    <View style={styles.container}>
      <CustomText type="heading2" text="Welcome to account view" />
    </View>
  );
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});