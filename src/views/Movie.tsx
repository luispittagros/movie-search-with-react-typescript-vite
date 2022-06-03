import { useParams } from 'react-router-dom';
import { getMovie, movieId } from '@/store/movies';
import { useAtom } from 'jotai';
import BackButton from '@/components/buttons/BackButton';

const Movie = () => {
  const { id = '' } = useParams();
  const [movie] = useAtom(getMovie);
  const [, setMoveId] = useAtom(movieId);

  setMoveId(id);

  if (!movie) return <div>Movie not found</div>;

  return (
    <>
      <BackButton />

      <h1>{movie.title}</h1>
    </>
  );
};

export default Movie;
