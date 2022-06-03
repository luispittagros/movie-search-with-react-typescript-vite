import { atom } from 'jotai';

export const moviesStore = atom<Movie[]>([]);

export const loadingMovies = atom(false);

export const searchTerm = atom('');

export const movieStore = atom<Movie>({} as Movie);

export default {
  moviesStore,
  loadingMovies,
  searchTerm,
};
