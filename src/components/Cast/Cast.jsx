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

  return (
    <div>
      <ul className={style.moviesDetailList}>
        {moviesCredits.map(
          item =>
            item.profile_path && (
              <li className={style.moviesDetailsItem} key={item.id}>
                <img
                  className={style.movieCastImage}
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                />
                <div className={style.movieTextWrapp}>
                  <p className={style.movieDetailsTextName}>{item.name}</p>
                  <p className={style.movieDetailsTextCharacter}>
                    {item.character}
                  </p>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Cast;
