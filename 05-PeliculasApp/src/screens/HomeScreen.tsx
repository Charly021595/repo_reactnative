import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import MoviePoster from '../components/MoviePoster';
import { styles } from '../theme/appTheme';
import useMovie from '../hooks/useMovie';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from "../helpers/getColores";
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovie();
  const { top } = useSafeAreaInsets();
  const { setMainColors } = useContext( GradientContext )

  const getPosterColors = async( index: number ) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );
    
    setMainColors({ primary, secondary });
  }
  
  useEffect(() => {
    if (nowPlaying.length > 0 ) {
      getPosterColors(0);
    }
  }, [nowPlaying])
  

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="red" size={ 100 }/>
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>

          {/* Carusel principal */}
          <View style={styles.containerCarousel}>
            <Carousel
              data={ nowPlaying }
              renderItem={ ({ item }: any) => <MoviePoster movie={item}/>}
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              inactiveSlideOpacity={0.9}
              onSnapToItem={ index => getPosterColors( index ) }
            />
          </View>

          {/* Peliculas populares */}
          <HorizontalSlider title='Populares' movies={ popular }/>
          <HorizontalSlider title='Peliculas Top' movies={ topRated }/>
          <HorizontalSlider title='Proximas Peliculas' movies={ upcoming }/>

        </View>
      </ScrollView>
    </GradientBackground>
  )
}

export default HomeScreen;

