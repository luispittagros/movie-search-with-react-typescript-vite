import BackButton from '@/components/buttons/BackButton';
import '@/components/movies/MovieNotFound.scss';

const MovieNotFound = () => {
  return (
    <>
      <BackButton />

      <div className="movie-not-found">
        <h2>Sorry, movie not found.</h2>
      </div>
    </>
  );
};

export default MovieNotFound;
