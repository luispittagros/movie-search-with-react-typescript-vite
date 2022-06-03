import { useAtom } from 'jotai';
import { moviesStore, loadingMovies, searchTerm } from '@/store/movies';
import '@/components/search/SearchBar.scss';
import { ChangeEvent, useCallback } from 'react';
import { searchMovies } from '@/api/movies';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const [, setMovies] = useAtom(moviesStore);
  const [, setLoading] = useAtom(loadingMovies);
  const [, setSearch] = useAtom(searchTerm);

  const debouncedHandleChange = useCallback(
    debounce(async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const { value } = e.target;

      setSearch(value);

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
    [debounce, setMovies, setLoading, setSearch],
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        onChange={debouncedHandleChange}
      />
    </div>
  );
};

export default SearchBar;
