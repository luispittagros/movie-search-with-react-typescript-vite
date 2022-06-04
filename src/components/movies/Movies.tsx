import { useAtom } from 'jotai';
import { loadingAtom, moviesAtom } from '@/store/movies';
import MovieCard from '@/components/movies/MovieCard';
import '@/components/movies/Movies.scss';
import Loader from '@/components/loader/Loader';

const Movies = () => {
  const [movies] = useAtom(moviesAtom);
  const [loading] = useAtom(loadingAtom);

  if (loading) return <Loader />;

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Movies;
