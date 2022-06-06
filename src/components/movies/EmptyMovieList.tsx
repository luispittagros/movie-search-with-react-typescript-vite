import '@/components/movies/EmptyMovieList.scss';
import { FC } from 'react';
import PropTypes from 'prop-types';
import EmptyState from '@/assets/img/illustration-empty-state.png';

interface EmptyMovieListProps {
  message?: string;
}

const EmptyMovieList: FC<EmptyMovieListProps> = ({ message }) => {
  return (
    <div className="empty-movie-list">
      <img src={EmptyState} alt="No movies to show" />

      {message && <p>{message}</p>}
    </div>
  );
};

EmptyMovieList.defaultProps = {
  message: '',
};

EmptyMovieList.propTypes = {
  message: PropTypes.string,
};

export default EmptyMovieList;
