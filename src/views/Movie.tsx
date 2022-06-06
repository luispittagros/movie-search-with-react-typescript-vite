import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAtom } from 'jotai';

import { movieAtom } from '@/store/movies';
import { fetchMovie } from '@/api/movies';

import BackButton from '@/components/buttons/BackButton';
import LogoLabel from '@/components/labels/LogoLabel';
import TextLabel from '@/components/labels/TextLabel';

import { ReactComponent as IMDBLogo } from '@/assets/svg/logos/logo-imdb.svg';
import { ReactComponent as RottenTomatoesLogo } from '@/assets/svg/logos/logo-rotten-tomatoes.svg';
import { ReactComponent as Heart } from '@/assets/svg/icons/icon-heart.svg';

import '@/views/Movie.scss';
import Button from '@/components/buttons/Button';
import useToggleFavoriteMovie from '@/hooks/useToggleFavoriteMovie';

const Movie = () => {
  const { id = '' } = useParams();
  const [movie, setMovie] = useAtom(movieAtom);
  const [isFavorite, toggleFavorite] = useToggleFavoriteMovie(id);

  useEffect(() => {
    const fetchData = async (): Promise<Movie> => {
      const { data } = await fetchMovie(id);

      return {
        id,
        title: data.Title,
        year: data.Year,
        runtime: data.Runtime,
        genres: data.Genre.split(', '),
        directors: data.Director.split(', '),
        cast: data.Actors.split(', '),
        plot: data.Plot,
        poster: data.Poster,
        rated: data.Rated,
        imdbRating: data.Ratings.find(
          (rating) => rating.Source === 'Internet Movie Database',
        )?.Value,
        rottenTomatoes: data.Ratings.find(
          (rating) => rating.Source === 'Rotten Tomatoes',
        )?.Value,
      };
    };

    fetchData().then(setMovie).catch(console.error);

    return () => setMovie(null);
  }, [setMovie, id]);

  const handleFavorite = useCallback(() => {
    if (!movie) return;

    toggleFavorite({
      id,
      title: movie.title,
      poster: movie.poster,
      year: movie.year,
    });
  }, [toggleFavorite, movie]);

  if (!movie) return <h1>Sorry, the movie was not found</h1>;

  return (
    <>
      <BackButton />

      <div className="movie">
        <div className="movie__info">
          <div className="movie__meta">
            <TextLabel>{movie.runtime}</TextLabel>
            <TextLabel>{movie.year}</TextLabel>
            <TextLabel filled>{movie.rated}</TextLabel>
          </div>

          <h1 className="movie__title">{movie.title}</h1>

          <div className="movie__rating">
            {movie.imdbRating && (
              <LogoLabel logo={<IMDBLogo />} color="--yellow">
                {movie.imdbRating}
              </LogoLabel>
            )}

            {movie.rottenTomatoes && (
              <LogoLabel logo={<RottenTomatoesLogo />} color="--red">
                {movie.rottenTomatoes}
              </LogoLabel>
            )}

            <Button
              icon={<Heart />}
              active={isFavorite}
              onClick={handleFavorite}
            >
              Add to favourites
            </Button>
          </div>

          <div className="movie__plot">
            <TextLabel>Plot</TextLabel>
            <p>{movie.plot}</p>
          </div>

          <div className="movie__details">
            <div className="movie__details-item">
              <TextLabel>Cast</TextLabel>

              <ul>
                {movie.cast?.map((cast) => (
                  <li key={cast}>{cast}</li>
                ))}
              </ul>
            </div>

            <div className="movie__details-item">
              <TextLabel>Genres</TextLabel>

              <ul>
                {movie.genres?.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>

            <div className="movie__details-item">
              <TextLabel>Director</TextLabel>

              <ul>
                {movie.directors?.map((director) => (
                  <li key={director}>{director}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="movie__poster"
          style={{ backgroundImage: `url(${movie.poster})` }}
        />
      </div>
    </>
  );
};

export default Movie;
