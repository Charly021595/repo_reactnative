import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareaSeisScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.cajaMorada } />
      <View style={ styles.cajaNaranja } />
      <View style={ styles.cajaAzul } />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#28425B',
    },
    cajaMorada: {
      flex: 2,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#5856D6',
    },
    cajaNaranja: {
      flex: 2,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#F0A23B',
    },
    cajaAzul: {
      flex: 4,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#28C4D9',
    }
});
