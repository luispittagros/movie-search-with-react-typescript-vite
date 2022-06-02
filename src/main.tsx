import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/views/Home';
import Movie from '@/views/Movie';
import App from './App';

const rootElement = document.getElementById('root');

createRoot(rootElement as Element).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
);
