import React from 'react'
import { Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon  from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme/appTheme';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import CastItem from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
        {/* Detalles */}
        <View style={{ ...styles.marginHMovieD }}>
            <View style={{ ...styles.columnMovieD }}>
                <Icon
                    name='star-outline'
                    color='grey'
                    size={ 16 }
                />

                <Text style={{ ...styles.words }}> { movieFull.vote_average }</Text>

                <Text style={{ ...styles.words, ...styles.marginLMovieDG }}>
                    -{ movieFull.genres.map( g => g.name ).join(', ') }
                </Text>

            </View>

            {/* Sinopsis de la pelicula */}
            <Text style={{ ...styles.words, ...styles.sinopsisMovieD }}>
                Sinopsis
            </Text>

            <Text style={{ ...styles.words, ...styles.sinopsisTextMovieD }}>
                { movieFull.overview }
            </Text>

            {/* Presupuesto */}
            <Text style={{ ...styles.words, ...styles.sinopsisMovieD }}>
                Presupuesto
            </Text>
            <Text style={{ ...styles.words, ...styles.sinopsisTextMovieD }}>
                { currencyFormatter.format(movieFull.budget, {code:'USD'}) }
            </Text>

        </View>
        {/* Casting */}
        <View style={{ ...styles.marginActoresName }}>
            <Text style={{ ...styles.words, ...styles.sinopsisMovieD, ...styles.marginsActores }}>
                Actores
            </Text>

            <FlatList 
                data={ cast }
                keyExtractor={ (item) => item.id.toString() }
                renderItem={ ({ item }) => <CastItem actor={ item } /> }
                horizontal={true}
                showsHorizontalScrollIndicator={ false }
                style={{ ...styles.corruselActores }}
            />
            {/* <CastItem actor={ cast[0] }/> */}
        </View>
    </>
  )
}

export default MovieDetails
