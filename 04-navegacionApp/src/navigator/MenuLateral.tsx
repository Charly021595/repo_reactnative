import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import SettingsScreen from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno { ...props}/>} 
      screenOptions={{
        drawerType: width >= 768 ? "permanent" : "front",
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation } : DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'
          }}
          style={ styles.avatar }
        />
      </View>


      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate("Tabs") }
        >
          <Icon name='map-outline' size={20} color={ colores.primary } />
          <Text style={{
            ...styles.words,
            ...styles.menuTexto
          }}> Navegacion
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate("SettingsScreen") }
        >
          <Icon name='settings-outline' size={20} color={ colores.primary } />
          <Text style={{
              ...styles.words,
              ...styles.menuTexto
            }}
          > Ajustes
          </Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}