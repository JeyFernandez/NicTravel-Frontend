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
        <Button
        type='small'
        title='Multiserivicios'
        onClick={()=> navigation.navigate('MultiService')}
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
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: 200
    }
})