import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';

const BottomTop = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

    const { top:paddingTop } = useSafeAreaInsets();

  return (
    <BottomTop.Navigator
        style={{ paddingTop }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={
            ({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string;
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chatbubble-ellipses-outline'
                        break;

                        case 'Contacts':
                            iconName = 'people-outline'
                        break;

                        case 'Albums':
                            iconName = 'albums-outline'
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
      <BottomTop.Screen name="Chat" component={ChatScreen} />
      <BottomTop.Screen name="Contacts" component={ContactsScreen} />
      <BottomTop.Screen name="Albums" component={AlbumsScreen} />
    </BottomTop.Navigator>
  )
}

export default TopTabNavigator
