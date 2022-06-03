import { FC, memo } from 'react';
import { generatePath, Link } from 'react-router-dom';
import clsx from 'clsx';

import { ReactComponent as Heart } from '@/assets/svg/icons/icon-heart.svg';

import { moviesStore } from '@/store/movies';
import { useAtom } from 'jotai';

import '@/components/movies/MovieCard.scss';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({
  movie: { id, title, year, poster, isFavorite = false },
}) => {
  const [, setMovies] = useAtom(moviesStore);

  const toggleFavorite = (movieId: string) => {
    setMovies((movies) => {
      const newMovies = [...movies];

      const movieFound = newMovies.find((movie) => movie.id === movieId);

      if (movieFound) {
        movieFound.isFavorite = !movieFound.isFavorite;
      }

      return newMovies;
    });
  };

  const moviesPath = generatePath('/movies/:id', { id });

  return (
    <li
      className={clsx('movie-card', isFavorite && 'movie-card--favorite')}
      style={{ backgroundImage: `url(${poster})` }}
    >
      <Link to={moviesPath} className="movie-card__overview">
        <button
          type="button"
          className="movie-card__overview-favorite"
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
          aria-label="favorite"
        >
          <Heart />
        </button>

        <h2 className="movie-card__overview-title">{title}</h2>
        <p className="movie-card__overview-year">{year}</p>
      </Link>
    </li>
  );
};

export default memo(MovieCard);
