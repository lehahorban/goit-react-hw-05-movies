const Key = '4fd2b5a839245f9e522eea96c28988fc';

function getTrending() {
  return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${Key}`)
    .then(response => response.json())
    .then(data => data.results);
}

function searchMovies(movies) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${Key}&language=en-US&query=${movies}&include_adult=false`
  )
    .then(response => response.json())
    .then(data => data.results);
}

function getMovieDetails(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${Key}&language=en-US`
  )
    .then(response => response.json())
    .then(response => response);
}

function getMovieCredits() {
  return fetch(
    `https://api.themoviedb.org/3/movie/626735/credits?api_key=${Key}&language=en-US`
  )
    .then(response => response.json())
    .then(response => console.log(response));
}

function getMovieReviews() {
  return fetch(
    `https://api.themoviedb.org/3/movie/626735/reviews?api_key=${Key}&language=en-US&page=1`
  )
    .then(response => response.json())
    .then(response => console.log(response));
}

const Api = {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default Api;
