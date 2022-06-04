import { ChangeEvent, FC, useCallback } from 'react';
import { useAtom } from 'jotai';
import debounce from 'lodash.debounce';
import { moviesStore, loadingMovies, searchQuery } from '@/store/movies';
import { searchMovies } from '@/api/movies';
import '@/components/search/SearchBar.scss';

import { ReactComponent as IconMagnifier } from '@/assets/svg/icons/icon-magnifier.svg';
import clsx from 'clsx';

interface SearchBarProps {
  disabled?: boolean;
}

const defaultProps = {
  disabled: false,
};

const SearchBar: FC<SearchBarProps> = ({ disabled }) => {
  const [, setMovies] = useAtom(moviesStore);
  const [, setLoading] = useAtom(loadingMovies);
  const [search, setSearchQuery] = useAtom(searchQuery);

  const debouncedHandleChange = useCallback(
    debounce(async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const { value } = e.target;

      setSearchQuery(value);

      try {
        setLoading(true);

        const { data } = await searchMovies(value);

        const results = data.Search?.map<Movie>((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
          isFavorite: false,
        }));

        if (results) {
          setMovies(results);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500),
    [debounce, setMovies, setLoading, setSearchQuery],
  );

  return (
    <div className={clsx('search-bar', disabled && 'search-bar--disabled')}>
      <IconMagnifier />

      <input
        type="text"
        placeholder="Search movies..."
        onChange={debouncedHandleChange}
        disabled={disabled}
      />
    </div>
  );
};

SearchBar.defaultProps = defaultProps;

export default SearchBar;
