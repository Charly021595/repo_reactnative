import React, { useEffect } from 'react'

import { Text, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';


const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);
  

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 10
    }}>
      <Text style={{
        ...styles.words,
        ...styles.title
      }}> 
        Iconos 
      </Text>

      <Text>
        <TouchableIcon iconName="watch-outline" />;
        <TouchableIcon iconName="car-sport-outline" />;
        <TouchableIcon iconName="train-outline" />;
        <TouchableIcon iconName="logo-facebook" />;
        <TouchableIcon iconName="logo-instagram" />;
        <TouchableIcon iconName="logo-whatsapp" />;
        <TouchableIcon iconName="bus-outline" />;
        <TouchableIcon iconName="pizza-outline" />;
        <TouchableIcon iconName="airplane-outline" />;
        <TouchableIcon iconName="home-outline" />;
        <TouchableIcon iconName="boat-outline" />;
        <TouchableIcon iconName="airplane-outline" />;
      </Text>

    </View>
  )
}

export default Tab1Screen
