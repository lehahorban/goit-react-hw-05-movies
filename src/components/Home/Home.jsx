import style from '../../style.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from 'services/services';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      Api.getTrending().then(results => setMovies(results));
    } catch (error) {}
  }, []);

  const location = useLocation();
  return (
    <div className={style.home}>
      <h1 className={style.title}>Trending today</h1>
      <ul className={style.movieList}>
        {movies.map(item => (
          <li className={style.movieItem} key={item.id}>
            <NavLink
              state={{ from: location }}
              className={style.movieLink}
              to={`/movies/${item.id}`}
            >
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
