import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={ (title) ? styles.containerPeliculasP : styles.containerPeliculasPDos}>
        {
            title && <Text style={{ ...styles.words,  fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
        }
    
        <FlatList
            data={ movies }
            renderItem={ ({ item }: any) => (
                <MoviePoster movie={item} width={140} height={200}/>
            )}
            keyExtractor={ ( item ) => item.id.toString() }
            horizontal= {true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default HorizontalSlider
