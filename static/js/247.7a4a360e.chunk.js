"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(e,t,n){n.r(t);var i=n(885),a=n(791),c=n(871),r=n(636),o=n(257),s=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,i.Z)(e,2),n=t[0],u=t[1],h=(0,c.UO)().movieId;return(0,a.useEffect)((function(){r.Z.getMovieCredits(h).then((function(e){return u(e)}))}),[h]),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:o.Z.moviesDetailList,children:n.map((function(e){return e.profile_path&&(0,s.jsxs)("li",{className:o.Z.moviesDetailsItem,children:[(0,s.jsx)("img",{className:o.Z.movieCastImage,src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name}),(0,s.jsxs)("div",{className:o.Z.movieTextWrapp,children:[(0,s.jsx)("p",{className:o.Z.movieDetailsTextName,children:e.name}),(0,s.jsx)("p",{className:o.Z.movieDetailsTextCharacter,children:e.character})]})]},e.id)}))})})}},636:function(e,t){var n="4fd2b5a839245f9e522eea96c28988fc";var i={getTrending:function(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(n)).then((function(e){return e.json()})).then((function(e){return e.results}))},searchMovies:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(n,"&language=en-US&query=").concat(e,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){return e.results}))},getMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(n,"&language=en-US"))},getMovieCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(n,"&language=en-US")).then((function(e){return e.json()})).then((function(e){return e.cast}))},getMovieReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return e.results}))}};t.Z=i}}]);
//# sourceMappingURL=247.7a4a360e.chunk.js.map