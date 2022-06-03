import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_OMDB_API_URL,
  params: {
    apiKey: import.meta.env.VITE_OMDB_API_KEY,
  },
});

export const searchMovies = async (query: string, page = 1) => {
  return api.get<OMDBSearchResponse>('/', {
    params: {
      s: query,
      type: 'movie',
      page,
    },
  });
};

export const fetchMovie = async (id: string) => {
  return api.get<OMDBMovieResponse>('/', {
    params: {
      i: id,
      plot: 'short',
    },
  });
};

export default {
  searchMovies,
};
