import axios from 'axios'


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '401a187ae66a221b8f2c145c3fe903fe',
        language: 'es-ES',
    }
})


export default movieDB;
