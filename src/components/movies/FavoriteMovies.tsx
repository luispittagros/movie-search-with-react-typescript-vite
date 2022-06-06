import { useEffect, useState } from 'react';

import MovieCard from '@/components/movies/MovieCard';
import { getFavoriteMovies } from '@/hooks/useToggleFavoriteMovie';
import type { FavoriteMovie } from '@/hooks/useToggleFavoriteMovie';

import '@/components/movies/Movies.scss';
import EmptyMovieList from '@/components/movies/EmptyMovieList';

const FavoriteMovies = () => {
  const [movies, setMovies] = useState<FavoriteMovie[]>([]);

  useEffect(() => {
    const favoriteMovies = getFavoriteMovies();
    setMovies(favoriteMovies);
  }, []);

  if (!movies.length)
    return (
      <EmptyMovieList message="Search and find your next favourite movie 🙂" />
    );

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default FavoriteMovies;
