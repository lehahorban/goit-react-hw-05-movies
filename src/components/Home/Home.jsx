import style from '../../style.module.css';
import { Link, NavLink } from 'react-router-dom';
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
    <div className={style.home}>
      <h1 className={style.title}>Trending today</h1>
      <ul className={style.movieList}>
        {movies.map(item => (
          <li className={style.movieItem} onClick={hendleMovie} key={item.id}>
            <NavLink className={style.movieLink} to={`/movies/${item.id}`}>
              <img
                className={style.movieImage}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
              {item.name || item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
