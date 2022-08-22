import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'services/services';

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
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              alt={item.title}
            />
            <p>{item.title}</p>
            <p>User Score: {item.vote_average}</p>
            <p>Overview: {item.overview}</p>
            <p>Genres: {item.genres.map(item => item.name)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetails;
