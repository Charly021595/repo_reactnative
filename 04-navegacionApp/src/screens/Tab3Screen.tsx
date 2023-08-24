import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Tab3Screen = () => {

  useEffect(() => {
    console.log('Tab3Screen effect');
  }, [])

  return (
    <View style={styles.globalMargin}>
        <Text style={{
          ...styles.words,
          ...styles.title
        }}> Tab3Screen </Text>
    </View>
  )
}

export default Tab3Screen
