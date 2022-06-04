import { lazy, Suspense } from 'react';
import Loader from '@/components/loader/Loader';
import SearchBar from '@/components/search/SearchBar';

const Movies = lazy(() => import('@/components/movies/Movies'));

const Home = () => {
  return (
    <>
      <SearchBar />

      <Suspense fallback={<Loader />}>
        <Movies />
      </Suspense>
    </>
  );
};

export default Home;
