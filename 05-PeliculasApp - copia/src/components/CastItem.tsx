import React from 'react';
import { Cast } from '../interfaces/creditsInterface';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    actor: Cast
}

const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

  return (
    <View style={{ ...styles.containerActor }}>
        {
            actor.profile_path && (
                <Image 
                    source={{ uri }}
                    style={{ ...styles.imageActor }}
                />
            )
        }
        <View style={{ ...styles.actorInfo }}>
            <Text style={{ ...styles.nombreActor }}>
                { actor.name }
            </Text>
            <Text style={{ ...styles.nombrePersonaje }}>
                { actor.character }
            </Text>
        </View>

    </View>
  )
}

export default CastItem
