import '@/components/movies/EmptyMovieList.scss';
import { FC } from 'react';
import PropTypes from 'prop-types';

interface EmptyMovieListProps {
  message?: string;
}

const EmptyMovieList: FC<EmptyMovieListProps> = ({ message }) => {
  return (
    <div className="empty-movie-list">
      <img
        src="/src/assets/img/illustration-empty-state.png"
        alt="No movies to show"
      />

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
