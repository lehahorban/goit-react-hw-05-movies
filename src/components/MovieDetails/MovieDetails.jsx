import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import Api from 'services/services';
import style from '../../style.module.css';
import image_404 from './image.png';

function MovieDetails() {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    Api.getMovieDetails(movieId)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => setMoviesDetails([data]))
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);
  console.log(moviesDetails);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className={style.movieWrapp}>
      <button onClick={goBack} className={style.btnGoBack} type="button">
        Go Back
      </button>
      <ul className={style.moviesDetails}>
        {moviesDetails.length < 1 && (
          <div className={style.errorWrapper}>
            <h2 className={style.errorTitle}>Sorry page not found</h2>
            <img className={style.image_404} src={image_404} alt="404" />
          </div>
        )}
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
