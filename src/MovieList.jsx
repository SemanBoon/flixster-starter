
import React, { useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

function MovieList({ movieData, showMoreMovies}) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <>
      <div id="movie-list">
        {movieData.map((movie, idx) => (
          <MovieCard
                onClick={(movie) => {
                    setSelectedMovie(movie);
                    setIsModalOpen(true);
                }}

                //TODO: find out why some movie covers are not showing up
                key={idx}
                movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                movieTitle={movie.title}
                movieRating={movie.vote_average}

            />
        ))}
      </div>
      {movieData && (
        <button id="Load Button" onClick={showMoreMovies}>Load More</button>
      )}
      {isModalOpen && selectedMovie && <Modal movie={selectedMovie} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
export default MovieList;











// import React, { useState, useEffect } from "react";
// import "./MovieList.css";
// import MovieCard from "./MovieCard";

// function MovieList() {
//     const [movieData, setMovieData] = useState([]);
//     const [moviePage, setMoviePage] = useState([10]);

//     const fetchData = async () => {
//         const apiKey = import.meta.env.VITE_APP_API_KEY;
//         const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${moviePage}`);
//         const data = await response.json();
//         setMovieData(data.results);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const showMoreMovies = () => {
//         setMoviePage(moviePage + 5);
//     };

//     // console.log("movieData", movieData);

//     return (
//         <>
//             <div id="movie-list">
//                 {movieData.slice(0,moviePage).map(movie => (
//                     <MovieCard
//                         key={movie.id}
//                         movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                         movieTitle={movie.title}
//                         movieRating={movie.vote_average}
//                     />
//                 ))}
//             </div>
//             <button id="Load Button" onClick={() => showMoreMovies()}>Load More</button>
//         </>
//     );
// }

// export default MovieList;
