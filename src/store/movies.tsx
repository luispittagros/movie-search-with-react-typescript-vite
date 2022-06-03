import { atom } from 'jotai';

export const moviesStore = atom<Movie[]>([]);

export const loadingMovies = atom(false);

export const searchTerm = atom('');

export const movieId = atom('');

export const getMovie = atom((get) =>
  get(moviesStore).find((movie: Movie) => movie.id === get(movieId)),
);

export default {
  moviesStore,
  loadingMovies,
  searchTerm,
  getMovie,
};
