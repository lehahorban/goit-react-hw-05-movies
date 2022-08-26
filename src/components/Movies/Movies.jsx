import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from 'services/services';

import style from '../../style.module.css';

function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [moviesArray, setMoviesArray] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const onChange = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return alert('Треба написати що шукаєте');
    }
    setSearchParams(inputValue !== '' ? { query: inputValue } : {});
    setInputValue('');
  };

  const query = searchParams.get('query');
  console.log(query);
  useEffect(() => {
    if (query === null) {
      return;
    }
    Api.searchMovies(query).then(moviesResults =>
      setMoviesArray(moviesResults)
    );
  }, [query, moviesArray]);

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
