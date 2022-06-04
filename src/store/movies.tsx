import { atom } from 'jotai';

export const moviesAtom = atom<Movie[]>([]);

export const loadingAtom = atom(false);

export const errorAtom = atom(false);

export const searchQueryAtom = atom('');

export const searchPageAtom = atom(1);

export const movieAtom = atom<Movie>({} as Movie);

export default {
  loadingAtom,
  errorAtom,
  moviesAtom,
  movieAtom,
  searchQueryAtom,
  searchPageAtom,
};
