/* const IMG_PATH = 'http://image.tmdb.org/t/p/w185';
const IMG_PATH_BACKDROP = 'http://image.tmdb.org/t/p/w1280'; */
/* const API_GENRE = 'genre/movie/list'; */
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a94db6e1acf929e6c3d28e88dc1bb386';
const API_POPULAR_URL = 'movie/popular';
const axios = require('axios');

async function getFilms(){
  let films = await axios.get(API_URL+API_POPULAR_URL+'?api_key='+API_KEY);/* resp.data.results */;
  return films;
};

export default getFilms;