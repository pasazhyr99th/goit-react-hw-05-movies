import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '59d71211f829907de44c68d945469335';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovie = async () => {
  try {
    const response = await axios.get(`trending/movie/day`, params);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const handleSearchMovie = async movieName => {
  try {
    const response = await axios.get(`search/movie?query=${movieName}`, params);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
