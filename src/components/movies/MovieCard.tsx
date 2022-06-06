import { FC, memo, MouseEvent } from 'react';
import { generatePath, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { ReactComponent as Heart } from '@/assets/svg/icons/icon-heart.svg';

import useToggleFavoriteMovie from '@/hooks/useToggleFavoriteMovie';

import '@/components/movies/MovieCard.scss';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({
  movie: { id, title, year, poster },
}) => {
  const [isFavorite, toggleFavorite] = useToggleFavoriteMovie(id);

  const moviesPath = generatePath('/movies/:id', { id });

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    toggleFavorite({
      id,
      title,
      poster,
      year,
    });
  };

  return (
    <li
      className={clsx(
        'movie-card',
        isFavorite && 'movie-card--favorite',
        poster === 'N/A' && 'movie-card--no-poster',
      )}
      style={{ backgroundImage: poster !== 'N/A' ? `url(${poster})` : '' }}
    >
      <Link to={moviesPath} className="movie-card__overview">
        <button
          type="button"
          className="movie-card__overview-favorite"
          onClick={handleClick}
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(MovieCard);
