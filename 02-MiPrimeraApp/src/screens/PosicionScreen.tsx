import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const PosicionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada }/>
        <View style={ styles.cajaNaranja }/>
        <View style={ styles.cajaVerde }/>
        <View style={ styles.cajaAzul }/>
        <View style={ styles.cajaRojo }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
        // alignItems: 'center',
        // justifyContent:'center',
    },
    cajaMorada:{
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        let: 0,
    },
    cajaAzul: {
        backgroundColor: 'brown',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        let: 0,
    },
    cajaRojo: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: '50%',
        right: '35%',
    },
});