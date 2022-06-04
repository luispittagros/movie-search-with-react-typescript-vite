import { atom } from 'jotai';

export const moviesStore = atom<Movie[]>([]);

export const loadingMovies = atom(false);

export const searchQuery = atom('');

export const movieStore = atom<Movie>({} as Movie);

export default {
  moviesStore,
  loadingMovies,
  searchQuery,
  movieStore,
};
