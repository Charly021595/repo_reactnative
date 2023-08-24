import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'>{};

const DetailsScreen = ( { route, navigation } : Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  const { isLoading, cast, movieFull} = useMovieDetails( movie.id);

  useMovieDetails( movie.id);

  return (

    <ScrollView>
      <View style={{
        ...styles.containerImageD,
        height: screenHeight * 0.7,
      }}>
        <View style={ styles.imageBorder }>
          <Image
            source={{uri}}
            style={styles.posterImage}
            />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={{...styles.subTitle, ...styles.words}}>{ movie.original_title }</Text>
        <Text style={{...styles.title, ...styles.words}}>{ movie.title }</Text>
      </View>

      {
        isLoading 
        ? <ActivityIndicator size={ 35 } color="grey" style={{ marginTop: 20 }}  />  
        : <MovieDetails movieFull={ movieFull! } cast={ cast } />
      }

      {/* Boton para cerrar */}
      <View style={{ ...styles.backButton }}>
        <TouchableOpacity
          onPress={() => navigation.pop() }
        >
          <Icon
            color="white"
            name="arrow-undo-outline"
            size={100}
          />
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default DetailsScreen
