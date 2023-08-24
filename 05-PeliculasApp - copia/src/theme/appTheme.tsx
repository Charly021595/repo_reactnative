import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    words:{
        color: 'black'
    },
    image:{
        flex: 1,
        borderRadius: 10,
    },
    containerImage: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
    containerCarousel: {
        height: 440,
    },
    containerPeliculasP: {
        height: 260
    },
    containerPeliculasPDos: {
        height: 230
    },
    posterImage: {
        flex: 1,
    },
    containerImageD: {
        width: '100%',
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageBorder:{
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },

    // estilos MovieDetails
    marginHMovieD: {
        marginHorizontal: 20
    },
    columnMovieD: {
        flexDirection: 'row',
    },
    marginLMovieDG: {
        marginLeft: 10,
    },
    sinopsisMovieD: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    },
    sinopsisTextMovieD: {
        fontSize: 16
    },

    // estilos actores
    marginActoresName: {
        marginTop: 10,
        marginBottom: 100,
    },
    marginsActores: {
        marginHorizontal: 20,
    },
    nombreActor: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    nombrePersonaje: {
        color: 'black',
        fontSize: 16,
        opacity: 0.7
    },
    imageActor: {
        width: 50, 
        height: 50,
        borderRadius: 10
    },
    containerActor: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        marginLeft: 20,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
    corruselActores: {
        marginTop: 10,
        height: 70
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5,
    },

    // estilos Fade
    contenedorPrincipal: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewSecundario: {
        backgroundColor: '#084F6A',
        width: 150,
        height: 150,
        borderColor: 'white',
        borderWidth: 10,
        marginBottom: 10,
    }
});
