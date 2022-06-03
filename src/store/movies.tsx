import { atom } from 'jotai';

const moviesStore = atom<Movie[]>([]);

export default moviesStore;
