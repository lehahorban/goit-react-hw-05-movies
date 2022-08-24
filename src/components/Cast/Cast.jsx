import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'services/services';
import style from '../../style.module.css';

function Cast() {
  const [moviesCredits, setMoviesCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    Api.getMovieCredits(movieId).then(data => setMoviesCredits(data));
  }, [movieId]);
  console.log(moviesCredits);
  return (
    <div>
      <ul className={style.moviesDetailList}>
        {moviesCredits.map(item => (
          <li className={style.moviesDetailsItem} key={item.id}>
            <img
              className={style.movieCastImage}
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p className={style.movieDetailsText}>{item.name}</p>
            <p className={style.movieDetailsText}>
              <span></span> {item.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
