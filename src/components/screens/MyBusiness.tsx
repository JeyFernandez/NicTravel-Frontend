import { View,  StyleSheet } from 'react-native';
import CustomText from '../atoms/CustomText';
import Hotels from '../organisms/Hotel';
const MyBusiness = ():JSX.Element => {
  return (
    <View style={styles.container} >
      <View style={styles.subContainer}>
      <Hotels/>
      </View>
    </View>
  );
}

export default MyBusiness;
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  subContainer:{
    marginTop:100,
  }

})