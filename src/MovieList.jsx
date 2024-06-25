import React, { useState, useEffect } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

function MovieList({ movieData, showMoreMovies, setSelectedMovie, selectedMovie }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <>
      <div id="movie-list">
        {movieData.map((movie, idx) => (
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
