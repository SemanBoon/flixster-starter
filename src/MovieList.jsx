import React, { useState, useEffect } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

function MovieList({ movieData, showMoreMovies, setSelectedMovie, selectedMovie }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

<<<<<<< HEAD
=======
function MovieList({movieData, showMoreMovies, onMovieClick}) {
>>>>>>> 5e24a6a10b67e02e3ea1a95ba8a27bbb67edb044
    return (
    <>
      <div id="movie-list">
        {movieData.map((movie, idx) => (
<<<<<<< HEAD
          <MovieCard
                key={idx}
                movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                movieTitle={movie.title}
                movieRating={movie.vote_average}
                movieId={movie.id}

                onClick={() => {
                  setSelectedMovie(movie);
                  setIsModalOpen(true);
                }}

=======
          <MovieCard onClick={onMovieClick}
            key={idx}
            movieImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            movieTitle={movie.title}
            movieRating={movie.vote_average}
>>>>>>> 5e24a6a10b67e02e3ea1a95ba8a27bbb67edb044
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
