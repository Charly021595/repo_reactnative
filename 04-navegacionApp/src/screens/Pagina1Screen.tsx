import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

const Pagina1Screen = ( { navigation }: Props ) => {

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button
  //         title='Menú'
  //         onPress={ () => navigation.toggleDrawer()}
  //       />
  //     )
  //   })
  // }, [])
  

  return (
    <View style={ styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen </Text>
      <Button
        title="Ir página 2"
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />
      
      <Text style={{
        ...styles.words,
        marginVertical: 20,
        fontSize: 20,

      }}>Navegar con argumentos
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6' 
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon name="body-outline" size={50} color="white" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427' 
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Susana'
          })}
        >
          <Icon name="body-outline" size={50} color={colores.primary} />
          <Text style={styles.botonGrandeTexto}>Susana</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Pagina1Screen
