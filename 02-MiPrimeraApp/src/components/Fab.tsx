import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props{
    title: string;
    onPress: () => void;
    position?: 'br' | 'bl';
}

export const Fab = ( { title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return(
            <TouchableOpacity 
                activeOpacity={ 0.8 }
                style={[
                    styles.fabLocation,
                    ( position === 'br' ) ? styles.right : styles.left
                ]}
                onPress={onPress}
            >
                <View  style={[ 
                    styles.fab,
                    ( position === 'br' ) ? styles.colorR : styles.colorL,
                ]}>
                    <Text style={ styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View 
                style={[
                    styles.fabLocation,
                    ( position === 'br' ) ? styles.right : styles.left
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 31) }
                >
                    <View  style={[ 
                        styles.fab,
                        ( position === 'br' ) ? styles.colorR : styles.colorL,
                    ]}>
                        <Text style={ styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom: 20,
    },
    left:{
        left: 20,
    },
    right:{
        right: 20,
    },
    colorL:{
        backgroundColor: '#FE0F8A'
    },
    colorR:{
        backgroundColor: '#0FD6FE',
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
