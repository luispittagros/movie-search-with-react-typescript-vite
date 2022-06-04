import { useEffect } from 'react';
import { searchMovies } from '@/api/movies';
import { useAtom } from 'jotai';
import { errorAtom, loadingAtom, moviesAtom } from '@/store/movies';
import axios from 'axios';

const useMovieSearch = (query: string, page: number) => {
  const [, setMovies] = useAtom(moviesAtom);
  const [, setLoading] = useAtom(loadingAtom);
  const [, setError] = useAtom(errorAtom);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const cancelTokenSource = axios.CancelToken.source();

    searchMovies(query, page, cancelTokenSource)
      .then(({ data }) => {
        const results = data.Search?.map<Movie>((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
          isFavorite: false,
        }));

        if (results) setMovies(results);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      })
      .finally(() => setLoading(false));

    return () => cancelTokenSource.cancel();
  }, [query, page, setMovies, setLoading, setError]);
};

export default useMovieSearch;
