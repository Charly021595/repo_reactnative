import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={ () => navigation.navigate('DetailsScreen', movie)}
        activeOpacity={0.8} 
        style={{
            width,
            height,
            marginHorizontal: 2,
            paddingBottom: 20,
            paddingHorizontal: 7
        }}
    >
        <View style={styles.containerImage}>
            <Image
                source={{uri}}
                style={styles.image}
            />
        </View>
    </TouchableOpacity>
  )
}

export default MoviePoster;
