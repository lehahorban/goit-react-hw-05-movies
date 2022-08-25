import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigate from './Navigate/Navigate';
// import Cast from './Cast/Cast';
// import Home from './Home/Home';
// import Movies from './Movies/Movies';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Reviews from './Reviews/Reviews';
// import NotFoundPage from './NotFoundPage/NotFoundPage';

const Cast = lazy(() => import('./Cast/Cast'));
const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
// import Api from 'services/services';

export const App = () => {
  return (
    <div>
      <Navigate />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
