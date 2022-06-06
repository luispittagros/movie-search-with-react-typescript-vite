import { useEffect, useState } from 'react';

export type FavoriteMovie = {
  id: string;
  title: string;
  poster: string;
  year: string;
};

const storeKey = 'FavoriteMovies';

export const getFavoriteMovies = (): FavoriteMovie[] => {
  const favoriteMovies = localStorage.getItem(storeKey);
  return favoriteMovies ? (JSON.parse(favoriteMovies) as FavoriteMovie[]) : [];
};

const useToggleFavoriteMovie = (
  id: string,
): [boolean, ({ title, poster, year }: FavoriteMovie) => void] => {
  const [isFavorite, setIsFavorite] = useState(false);

  const storeFavoriteMovies = (movies: FavoriteMovie[]): void => {
    localStorage.setItem(storeKey, JSON.stringify(movies));
  };

  const toggleFavorite = ({ title, poster, year }: FavoriteMovie) => {
    let movies = getFavoriteMovies();

    const favoriteMovieIndex = movies.findIndex(
      ({ id: movieId }) => movieId === id,
    );

    if (favoriteMovieIndex > -1) {
      movies = movies.filter(({ id: movieId }) => movieId !== id);
    } else {
      movies.push({ id, title, poster, year });
    }

    setIsFavorite(favoriteMovieIndex === -1);
    storeFavoriteMovies(movies);
  };

  useEffect(() => {
    const movies = getFavoriteMovies();
    const isFavoriteMovie = movies.some(({ id: movieId }) => movieId === id);
    setIsFavorite(isFavoriteMovie);
  }, []);

  return [isFavorite, toggleFavorite];
};

export default useToggleFavoriteMovie;
