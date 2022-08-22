// import style from '../../style.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Api from 'services/services';
import MovieDetails from 'components/MovieDetails/MovieDetails';
function Home() {
  const [movies, setMovies] = useState([]);

  Api.getTrending().then(results => setMovies(results));

  const hendleMovie = () => {
    return <MovieDetails />;
  };

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(item => (
          <li onClick={hendleMovie} key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.name || item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
