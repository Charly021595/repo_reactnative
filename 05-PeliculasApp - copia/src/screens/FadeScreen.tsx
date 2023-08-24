import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { styles } from '../theme/appTheme'
import useFade from '../hooks/useFade'

const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

  return (
    <View style={{ ...styles.contenedorPrincipal }}>

        <Animated.View style={{ ...styles.viewSecundario, opacity: opacity, }} />

        <Button
            title='FadeIn'
            onPress={ fadeIn }
        />

        <Button
            title='FadeOut'
            onPress={ fadeOut }
        />
    </View>
  )
}

export default FadeScreen
