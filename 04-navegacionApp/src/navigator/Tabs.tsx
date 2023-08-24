import React from "react";
import { Platform, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Tab1Screen from "../screens/Tab1Screen";
import Tab2Screen from "../screens/Tab2Screen";
import Tab3Screen from "../screens/Tab3Screen";

import { StackNavigator } from "./StackNavigator";
import { colores, styles } from "../theme/appTheme";

import TopTabNavigator from "./TopTabNavigator";


export const Tabs = () => {
    return Platform.OS === 'ios'
            ? <TabsIOS/>
            : <TabsAndroid/>
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={ true }
        inactiveColor="white"
        activeColor="white"
        barStyle={{
            backgroundColor: colores.primary,
        }}
        screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string,
                    iconColor: string = "white";
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'watch-outline';
                            iconColor = focused ? "black" : "white" ;
                        break;

                        case 'Tab2Screen':
                            iconName = 'desktop-outline';
                            iconColor = focused ? "black" : "white" ;
                        break;

                        case 'Tab3Screen':
                            iconName = 'chatbox-ellipses-outline';
                            iconColor = focused ? "black" : "white" ;
                        break;

                        case 'StackNavigator':
                            iconName = 'hand-right-outline';
                            iconColor = focused ? "black" : "white" ;
                        break;

                        default:
                            iconName = 'bug-outline';
                            iconColor = focused ? "black" : "white" ;
                        break;
                    }
                    return <Icon name={iconName} size={20} color={iconColor} />
                }
            })
        }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="Tab3Screen" options={{ title: 'Tab3' }} component={ Tab3Screen } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    // En el curso modifica las propiedades del Tab.navigator usando tabBarOptions, pero en las nuevas
    // versiones de react native se dejo de usar de esta manera ahora para modificar dichas propiedades
    // es con el screenOptions y todas las propiedades con con tabBar
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={
            ({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle:{
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string;
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'watch-outline'
                        break;

                        case 'Tab2Screen':
                            iconName = 'desktop-outline'
                        break;

                        case 'Tab3Screen':
                            iconName = 'chatbox-ellipses-outline'
                        break;

                        case 'StackNavigator':
                            iconName = 'hand-right-outline'
                        break;

                        default:
                            iconName = 'bug-outline'
                        break;
                    }
                    return <Text style={{ color }}><Icon name={iconName} size={20} color={ colores.primary } /></Text>
                }
            })
        }
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="Tab3Screen" options={{ title: 'Tab3' }} component={ Tab3Screen } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}