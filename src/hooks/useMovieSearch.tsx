import { useEffect } from 'react';
import { searchMovies } from '@/api/movies';
import { useAtom } from 'jotai';
import {
  errorAtom,
  loadingAtom,
  moviesAtom,
  searchTotalResultsAtom,
} from '@/store/movies';
import axios from 'axios';

const useMovieSearch = (query: string, page: number) => {
  const [movies, setMovies] = useAtom(moviesAtom);
  const [, setLoading] = useAtom(loadingAtom);
  const [, setError] = useAtom(errorAtom);
  const [, setSearchTotalResults] = useAtom(searchTotalResultsAtom);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(false);

    const cancelTokenSource = axios.CancelToken.source();

    searchMovies(query, page, cancelTokenSource)
      .then(({ data: { Search, totalResults = '0' } }) => {
        const results = Search?.map<Movie>((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }));

        setSearchTotalResults(+totalResults);
        setLoading(false);

        if (results) setMovies([...movies, ...results]);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      })
      .finally(() => setLoading(false));

    return () => cancelTokenSource.cancel();
  }, [query, page]);
};

export default useMovieSearch;
