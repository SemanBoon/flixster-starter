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
  const [selectedMovie, setSelectedMovie] = useState(null);
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
    console.log("show more movies. page number: " + moviePage);
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

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
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


      <MovieList movieData={movieData} showMoreMovies={showMoreMovies} onMovieClick={handleMovieClick}/>
      <Footer />
    </div>
  );
}

export default App;
