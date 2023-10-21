import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomText from '../../atoms/CustomText';
import Button from '../../molecules/Button';
interface Props {
    navigation: any
}
const PageNegocios = ({navigation}:Props):JSX.Element =>{
  return (
    <View style={styles.container}>
        <CustomText 
        text='Que tipo de negocio quieres  crear?'
        type='heading2'
        />
        <View style={styles.buttons}>
        <Button
        type='small'
        title='Restaurante'
        onClick={()=> navigation.navigate('FormsRestaurans')}
        />
        <Button
        type='small'
        title='Hotel'
        onClick={()=> navigation.navigate('FormsHoteles')}
        />
        </View>
    </View>
  )
}

export default PageNegocios;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 30
    }
})