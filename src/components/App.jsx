// import { Routes, Route } from 'react-router-dom';
// import Cast from './Cast/Cast';
// import Home from './Home/Home';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Movies from './Movies/Movies';
// import Reviews from './Reviews/Reviews';

export const App = () => {
  function getTrending() {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=4fd2b5a839245f9e522eea96c28988fc'
    )
      .then(response => response.json())
      .then(response => console.log(response));
  }
  getTrending();

  function searchMovies() {
    return fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=4fd2b5a839245f9e522eea96c28988fc&language=en-US&query=dog&page=1&include_adult=false'
    )
      .then(response => response.json())
      .then(response => console.log(response));
  }
  searchMovies();

  function getMovieDetails() {
    return fetch(
      'https://api.themoviedb.org/3/movie/626735?api_key=4fd2b5a839245f9e522eea96c28988fc&language=en-US'
    )
      .then(response => response.json())
      .then(response => console.log(response));
  }
  getMovieDetails();

  function getMovieCredits() {
    return fetch(
      'https://api.themoviedb.org/3/movie/626735/credits?api_key=4fd2b5a839245f9e522eea96c28988fc&language=en-US'
    )
      .then(response => response.json())
      .then(response => console.log(response));
  }
  getMovieCredits();

  function getMovieReviews() {
    return fetch(
      'https://api.themoviedb.org/3/movie/626735/reviews?api_key=4fd2b5a839245f9e522eea96c28988fc&language=en-US&page=1'
    )
      .then(response => response.json())
      .then(response => console.log(response));
  }
  getMovieReviews();

  return <div></div>;
};
