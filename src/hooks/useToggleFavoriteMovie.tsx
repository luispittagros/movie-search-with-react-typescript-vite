import { useEffect, useState } from 'react';

type FavoriteMovie = {
  id: string;
};

const useToggleFavoriteMovie = (id: string): [boolean, () => void] => {
  const [isFavorite, setIsFavorite] = useState(false);

  const storeKey = 'FavoriteMovies';

  const storedFavoriteMovies = (): FavoriteMovie[] => {
    const favoriteMovies = localStorage.getItem(storeKey);
    return favoriteMovies
      ? (JSON.parse(favoriteMovies) as FavoriteMovie[])
      : [];
  };

  const storeFavoriteMovies = (movies: FavoriteMovie[]): void => {
    localStorage.setItem(storeKey, JSON.stringify(movies));
  };

  const toggleFavorite = () => {
    let movies = storedFavoriteMovies();

    const favoriteMovieIndex = movies.findIndex((movie) => movie.id === id);

    if (favoriteMovieIndex > -1) {
      movies = movies.filter((movie) => movie.id !== id);
    } else {
      movies.push({ id });
    }

    setIsFavorite(favoriteMovieIndex === -1);
    storeFavoriteMovies(movies);
  };

  useEffect(() => {
    const movies = storedFavoriteMovies();
    const isFavoriteMovie = movies.some((movie) => movie.id === id);
    setIsFavorite(isFavoriteMovie);
  }, []);

  return [isFavorite, toggleFavorite];
};

export default useToggleFavoriteMovie;
