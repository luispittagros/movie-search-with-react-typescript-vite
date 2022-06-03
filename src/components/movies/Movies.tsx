import { useCallback } from 'react';
import { useAtom } from 'jotai';
import moviesStore from '@/store/movies';
import MovieCard from '@/components/movies/MovieCard';
import '@/components/movies/Movies.scss';

const Movies = () => {
  const [movies, setMovies] = useAtom(moviesStore);

  const toggleFavorite = (id: string) => {
    setMovies((moviesList) => {
      const newMovies = [...moviesList];

      const movieFound = newMovies.find((movie) => movie.id === id);

      if (movieFound) {
        movieFound.isFavorite = !movieFound.isFavorite;
      }

      return newMovies;
    });
  };

  const handleFavorite = useCallback(toggleFavorite, [setMovies]);

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleFavorite={handleFavorite}
        />
      ))}
    </ul>
  );
};

export default Movies;
