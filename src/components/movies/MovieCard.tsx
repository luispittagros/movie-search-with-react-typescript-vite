import { createElement, memo } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { ReactComponent as HeartWhite } from '@/assets/svg/icons/icon-heart-white.svg';
import { ReactComponent as HeartFull } from '@/assets/svg/icons/icon-heart-full.svg';

import '@/components/movies/MovieCard.scss';

interface MovieCardProps {
  movie: Movie;
  handleFavorite: (id: string) => void;
}

const MovieCard = ({
  movie: { id, title, year, poster, isFavorite = false },
  handleFavorite,
}: MovieCardProps) => {
  const heartIcon = isFavorite ? HeartFull : HeartWhite;

  const moviesPath = generatePath('/movies/:id', { id });

  return (
    <li className="movie-card" style={{ backgroundImage: `url(${poster})` }}>
      <Link to={moviesPath} className="movie-card__overview">
        <button
          type="button"
          className="movie-card__overview-favorite"
          onClick={() => handleFavorite(id)}
          aria-label="favorite"
        >
          {createElement(heartIcon)}
        </button>

        <h2 className="movie-card__overview-title">{title}</h2>
        <p className="movie-card__overview-year">{year}</p>
      </Link>
    </li>
  );
};

export default memo(MovieCard);
