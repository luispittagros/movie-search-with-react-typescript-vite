import { useAtom } from 'jotai';

import {
  hasMoreAtom,
  loadingAtom,
  moviesAtom,
  searchPageAtom,
  searchQueryAtom,
} from '@/store/movies';
import MovieCard from '@/components/movies/MovieCard';
import '@/components/movies/Movies.scss';
import Loader from '@/components/loader/Loader';
import { useEffect, useRef } from 'react';
import useInfiniteLoading from '@/hooks/useInfiniteLoading';

const Movies = () => {
  const [movies] = useAtom(moviesAtom);
  const [loading] = useAtom(loadingAtom);

  const [searchQuery] = useAtom(searchQueryAtom);
  const [searchPage, setSearchPage] = useAtom(searchPageAtom);
  const [hasMore] = useAtom(hasMoreAtom);

  const element = useRef<HTMLUListElement | null>(null);

  const [loadMore] = useInfiniteLoading(element);

  useEffect(() => {
    if (loadMore && !loading && hasMore && searchQuery) {
      setSearchPage(searchPage + 1);
    }
  }, [loadMore, movies]);

  if (loading && !movies.length) return <Loader />;

  return (
    <ul className="movies" ref={element}>
      {movies.map((movie, index) => (
        <MovieCard key={`${movie.id}-${index}`} movie={movie} />
      ))}
    </ul>
  );
};

export default Movies;
