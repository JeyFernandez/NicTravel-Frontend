import { View, StyleSheet } from "react-native";

import CustomText from "../atoms/CustomText";

const Map = (): JSX.Element => {
  return(
    <View style={styles.container}>
      <CustomText text="Welcome to  map View" type="heading2" />
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});