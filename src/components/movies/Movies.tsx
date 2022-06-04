import { useAtom } from 'jotai';
import { moviesStore } from '@/store/movies';
import MovieCard from '@/components/movies/MovieCard';
import '@/components/movies/Movies.scss';

const Movies = () => {
  const [movies] = useAtom(moviesStore);

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Movies;
