import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import Api from 'services/services';
import style from '../../style.module.css';

function MovieDetails() {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    Api.getMovieDetails(movieId).then(data => setMoviesDetails([data]));
  }, [movieId]);
  console.log(moviesDetails);

  return (
    <div>
      <ul className={style.moviesDetails}>
        {moviesDetails.map(item => (
          <li className={style.detailsItem} key={item.id}>
            <img
              className={style.movieDetailsImage}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <div className={style.itemWrapper}>
              <p className={style.movieDetailsTextTitle}>{item.title}</p>
              <p className={style.movieDetailsText}>
                <span>User Score:</span> {item.vote_average}
              </p>
              <p className={style.movieDetailsText}>
                <span>Overview:</span> {item.overview}
              </p>
              <p className={style.movieDetailsText}>
                <span>Genres:</span>{' '}
                {item.genres.map(item => item.name).join(', ')}
              </p>
              <div className={style.movieDetailsWrapper}>
                <Link
                  className={style.movieDetailsText}
                  to={`/movies/${item.id}/cast`}
                >
                  <span>Cast</span>
                </Link>
                <Link
                  className={style.movieDetailsText}
                  to={`/movies/${item.id}/reviews`}
                >
                  <span>Reviews</span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
