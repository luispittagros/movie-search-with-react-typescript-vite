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
import { useEffect } from 'react';
import useInfiniteLoading from '@/hooks/useInfiniteLoading';
import FavoriteMovies from '@/components/movies/FavoriteMovies';
import EmptyMovieList from '@/components/movies/EmptyMovieList';

const Movies = () => {
  const [movies] = useAtom(moviesAtom);
  const [loading] = useAtom(loadingAtom);

  const [searchQuery] = useAtom(searchQueryAtom);
  const [searchPage, setSearchPage] = useAtom(searchPageAtom);
  const [hasMore] = useAtom(hasMoreAtom);

  const [loadMore, elementRef] = useInfiniteLoading<HTMLUListElement>();

  useEffect(() => {
    if (loadMore && !loading && hasMore && searchQuery) {
      setSearchPage(searchPage + 1);
    }
  }, [loadMore, movies]);

  if (!loading && !movies.length) {
    if (searchQuery) {
      return (
        <EmptyMovieList
          message={`Sorry, we did not find any movies for "${searchQuery}"`}
        />
      );
    }

    return <FavoriteMovies />;
  }

  return (
    <>
      <ul className="movies" ref={elementRef}>
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </ul>

      {loading && <Loader small />}
    </>
  );
};

export default Movies;
