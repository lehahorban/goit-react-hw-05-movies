import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from 'services/services';

import style from '../../style.module.css';

function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState('');
  const [moviesArray, setMoviesArray] = useState([]);
  const onChange = e => {
    setInputValue(e.target.value);
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
        <input type="text" value={inputValue} onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {moviesArray.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
