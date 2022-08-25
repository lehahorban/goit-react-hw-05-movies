import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from 'services/services';

import style from '../../style.module.css';

function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState('');
  const [moviesArray, setMoviesArray] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const onChange = e => {
    const value = e.target.value;
    setInputValue(value);
    setSearchParams(value !== '' ? { query: value } : {});
  };
  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return alert('Треба написати що шукаєте');
    }
    setMovies(inputValue);
    setInputValue('');
  };
  useEffect(() => {
    if (movies === '') {
      return;
    }
    Api.searchMovies(movies).then(moviesResults =>
      setMoviesArray(moviesResults)
    );
  }, [movies, moviesArray]);

  return (
    <div>
      <form onSubmit={onSubmit} className={style.form}>
        <input
          className={style.input}
          type="text"
          value={inputValue}
          onChange={onChange}
        />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
      <ul className={style.movieList}>
        {moviesArray.map(item => (
          <li className={style.movieItem} key={item.id}>
            <NavLink className={style.movieLink} to={`/movies/${item.id}`}>
              {' '}
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

export default Movies;
