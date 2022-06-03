import { useRoutes } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/views/Home';
import Movie from '@/views/Movie';

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
      ],
    },
  ]);
};

export default Routes;
