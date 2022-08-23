import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <ul>
        {moviesDetails.map(item => (
          <li className={style.moviesDetailsItem} key={item.id}>
            <img
              className={style.movieDetailsImage}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title}
            />
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetails;
