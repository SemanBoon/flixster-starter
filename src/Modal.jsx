import React, { useEffect } from 'react';
import '/.Modal.css';

function Modal({ movie, onClose }) {
    if (!movie) return null;
  return(
        <div id="my-modal" class="modal-overlay">
            <div class="modal-content">
                <h5>{movie.title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={selectedMovie.title} />
                <p>{movie.overview}</p>
                <p><strong>Release Date:<strong/> {movie.release_date}</p>
                <p><strong>Genre:</strong> {movie.genre_ids.join(', ')}</p>
                <p><strong>Genre: </strong>{movie.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
            <button>
                <span class = "close-button" onClick={onClose}>close</span>
            </button>
        </div>
  )
};

export default Modal;




//modal
import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal({ movie, onClose, movieId}) {
    const [idData, setidData] = useState([])
    const apiKey = import.meta.env.VITE_APP_API_KEY;


    const modalData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`);
        const data = await response.json();
        setidData(data);
    };


    useEffect(() => {
        if (movie) {
          modalData(movie.id);
        }
    }, [movie]);

    if (!movie) return null;
        return(
            <div className="modal-overlay">
                <div className="modal-content">
                    <h5>Hello{movie.title}</h5>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <button>
                        <span className = "close-button" onClick={onClose}>close</span>
                    </button>
                </div>

            </div>
        )
};

export default Modal;


//movielist

import React, { useState, useEffect } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

function MovieList({ movieData, showMoreMovies, setSelectedMovie, selectedMovie }) {
    // const [selectedMovie, setSelectedMovie] = useState(null);
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


//app
import React, { useState, useEffect } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import Modal from "./Modal";
import NowPlaying from "./NowPlaying";


function App() {
  const [movieData, setMovieData] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const fetchData = async (pageNumber) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pageNumber}`
    );
    const data = await response.json();

    if (moviePage === 1) {
      setMovieData(data.results);
    } else {
      setMovieData([...movieData, ...data.results]);
    }
  };

  const showMoreMovies = async () => {
    setMoviePage(moviePage + 1);
    await fetchData(moviePage);
  };

  const searchData = async (query) => {
    if (query === "") {
      return;
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1`
    );
    const data = await response.json();
    console.log("data from search", data);
    setMovieData(data.results);
  };


  const handleMovieClick = () => {
    setSelectedMovie(e.target.value);
    setIsModalOpen(true);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleNowPlayingClick = () => {
    setMoviePage(1);
    fetchData(1);
  };

  useEffect(() => {
    showMoreMovies();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      searchData(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchData(moviePage);
  }, [moviePage]);

  useEffect(() => {
    if (sortOption) {
      let sortedData = [...movieData];
      if (sortOption === "genre") {
        sortedData.sort((a, b) => a.genre_ids[0] - b.genre_ids[0]);
      } else if (sortOption === "vote_average") {
        sortedData.sort((a, b) => b.vote_average - a.vote_average);
      }
      else if (sortOption === "popularity") {
        sortedData.sort((a, b) => a.popularity - b.popularity);
      }
      else if (sortOption === "release_date") {
        sortedData.sort((a, b) => new Date(a.release_date) - new Date (b.release_date));
      }
      else if (sortOption === "titleAsc") {
        sortedData.sort((a, b) => a.title > b.title ? 1 : -1);
      }
      else if (sortOption === "titleDesc") {
        sortedData.sort((a, b) => a.title < b.title ? 1 : -1);
      }
      setMovieData(sortedData);
    }
  }, [sortOption]);

  return (
    <div className="App">
      <div className="header-container">
        <h1>Flixster</h1>
      </div>
      <div className = "buttons">
          <SearchBar onSearch={searchData} />
          <Sort onSortChange={handleSortChange} />
          <NowPlaying onNowPlayingClick={handleNowPlayingClick} />
      </div>
      <Modal movie={selectedMovie} onClose={closeModal} movieId={selectedMovie ? selectedMovie.id : null}/>
      <MovieList movieData={movieData} showMoreMovies={showMoreMovies} onMovieClick={handleMovieClick} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>
      <Footer />

    </div>
  );
}

export default App;

