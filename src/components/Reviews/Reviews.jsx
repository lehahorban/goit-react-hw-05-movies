import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'services/services';
import style from '../../style.module.css';

function Reviews() {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    Api.getMovieReviews(movieId).then(data => setMoviesReviews(data));
  }, [movieId]);
  console.log(moviesReviews);
  return (
    <ul>
      {moviesReviews.length < 1 ? (
        <p className={style.title}>Not found</p>
      ) : (
        moviesReviews.map(item => (
          <li className={style.moviesReviewsItem} key={item.id}>
            <p className={style.movieDetailsText}>
              <span>Author: </span>
              {item.author}
            </p>
            <p className={style.movieDetailsText}>{item.content}</p>
          </li>
        ))
      )}
    </ul>
  );
}

export default Reviews;
