import { ChangeEvent, FC, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';
import clsx from 'clsx';
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

const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | string;
  return (...args: unknown[]) => {
    if (timeoutId) clearInterval(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const SearchBar: FC<SearchBarProps> = ({ disabled }) => {
  const [, setMovies] = useAtom(moviesAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [searchPage, setSearchPage] = useAtom(searchPageAtom);
  const [query, setQuery] = useState(searchQuery);

  const debounceCallback = useCallback(
    debounce((value: string) => {
      setMovies([]);
      setSearchPage(1);
      setSearchQuery(value);
    }, 350),
    [],
  );

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    debounceCallback(value);
  };

  useMovieSearch(searchQuery, searchPage);

  return (
    <div className={clsx('search-bar', disabled && 'search-bar--disabled')}>
      <IconMagnifier />

      <input
        type="text"
        placeholder="Search movies..."
        onChange={changeHandler}
        value={query}
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
