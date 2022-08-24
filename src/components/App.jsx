import { Routes, Route } from 'react-router-dom';
import Cast from './Cast/Cast';
import Navigate from './Navigate/Navigate';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
import NotFoundPage from './NotFoundPage/NotFoundPage';
// import Api from 'services/services';

export const App = () => {
  return (
    <div>
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
