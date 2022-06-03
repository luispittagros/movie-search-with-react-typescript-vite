import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_OMDB_API_URL,
  params: {
    apiKey: import.meta.env.VITE_OMDB_API_KEY,
  },
});

const searchMovies = async (query: string, page = 1) => {
  return api.get<OMDBSearchResponse>('/', {
    params: {
      s: query,
      type: 'movie',
      page,
    },
  });
};

export default searchMovies;
