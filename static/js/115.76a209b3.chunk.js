"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{115:function(e,t,n){n.r(t);var i=n(885),a=n(501),r=n(791),c=n(636),o=n(257),s=n(184);t.default=function(){var e=(0,r.useState)(""),t=(0,i.Z)(e,2),n=t[0],u=t[1],l=(0,r.useState)([]),h=(0,i.Z)(l,2),f=h[0],m=h[1],v=(0,a.lr)(),g=(0,i.Z)(v,2),p=g[0],d=g[1],_=p.get("query");return console.log(_),(0,r.useEffect)((function(){null!==_&&c.Z.searchMovies(_).then((function(e){return m(e)}))}),[_,f]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n.trim())return alert("\u0422\u0440\u0435\u0431\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u0449\u043e \u0448\u0443\u043a\u0430\u0454\u0442\u0435");d(""!==n?{query:n}:{}),u("")},className:o.Z.form,children:[(0,s.jsx)("input",{className:o.Z.input,type:"text",value:n,onChange:function(e){var t=e.target.value;u(t)}}),(0,s.jsx)("button",{className:o.Z.btn,type:"submit",children:"Search"})]}),(0,s.jsx)("ul",{className:o.Z.movieList,children:f.map((function(e){return(0,s.jsx)("li",{className:o.Z.movieItem,children:(0,s.jsxs)(a.OL,{className:o.Z.movieLink,to:"/movies/".concat(e.id),children:[" ",(0,s.jsx)("img",{className:o.Z.movieImage,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}),e.name||e.title]})},e.id)}))})]})}},636:function(e,t){var n="4fd2b5a839245f9e522eea96c28988fc";var i={getTrending:function(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(n)).then((function(e){return e.json()})).then((function(e){return e.results}))},searchMovies:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(n,"&language=en-US&query=").concat(e,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){return e.results}))},getMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(n,"&language=en-US"))},getMovieCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(n,"&language=en-US")).then((function(e){return e.json()})).then((function(e){return e.cast}))},getMovieReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(n,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return e.results}))}};t.Z=i}}]);
//# sourceMappingURL=115.76a209b3.chunk.js.map