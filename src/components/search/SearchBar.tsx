import { ChangeEvent, FC, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';
import clsx from 'clsx';
import debounce from 'lodash.debounce';
import useMovieSearch from '@/hooks/useMovieSearch';
import { searchQueryAtom, searchPageAtom, moviesAtom } from '@/store/movies';

import { ReactComponent as IconMagnifier } from '@/assets/svg/icons/icon-magnifier.svg';

import '@/components/search/SearchBar.scss';

interface SearchBarProps {
  disabled?: boolean;
}

const defaultProps = {
  disabled: false,
};

const SearchBar: FC<SearchBarProps> = ({ disabled }) => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [searchPage, setSearchPage] = useAtom(searchPageAtom);
  const [, setMovies] = useAtom(moviesAtom);

  const handleChange = debounce(
    useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        setMovies([]);
        setSearchPage(1);
        setSearchQuery(e.target.value);
      },
      [setMovies, setSearchPage, setSearchQuery],
    ),
    350,
  );

  useMovieSearch(searchQuery, searchPage);

  return (
    <div className={clsx('search-bar', disabled && 'search-bar--disabled')}>
      <IconMagnifier />

      <input
        type="text"
        placeholder="Search movies..."
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

SearchBar.defaultProps = defaultProps;

SearchBar.propTypes = {
  disabled: PropTypes.bool,
};

export default SearchBar;
