import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Tab2Screen = () => {

  useEffect(() => {
    console.log('Tab2Screen effect');
  }, [])

  return (
    <View style={styles.globalMargin}>
        <Text style={{
          ...styles.words,
          ...styles.title
        }}> Tab2Screen </Text>
    </View>
  )
}

export default Tab2Screen
