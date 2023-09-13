import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const REQUESTS = {
  TRENDING: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-us`,
  NETFLIX_ORIGINALS: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
  TOP_RATED: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-us`,
  ACTION_MOVIES: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  COMEDY_MOVIES: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=37`,
  HORROR_MOVIES: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  ROMANCE_MOVIES: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  DOCUMENTARIES: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
};

export const getContent = async (REQUEST) => {
  try {
    const response = await axios.get(`${BASE_URL}${REQUEST}`);
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
