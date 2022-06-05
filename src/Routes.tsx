import { useRoutes } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/views/Home';
import Movie from '@/views/Movie';
import NotFound from '@/views/NotFound';

const Routes = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/movies/:id',
          element: <Movie />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);
};

export default Routes;
