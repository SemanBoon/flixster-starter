// SortDropdown.js
import React from "react";

function SortDropdown({ onSortChange }) {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-options">Sort by: </label>
      <select id="sort-options" onChange={(e) => onSortChange(e.target.value)}>
        <option value="genre">Genre</option>
        <option value="vote_average">Vote Average</option>
      </select>
    </div>
  );
}

export default SortDropdown;



// App.js
import React, { useState, useEffect } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import Modal from "./Modal";

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
    setMovieData(prevData => [...prevData, ...data.results]);
  };

  const showMoreMovies = async () => {
    console.log("show more movies. page number: " + moviePage);
    setMoviePage(prevPage => prevPage + 1);
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

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    showMoreMovies();
  }, []);

  useEffect(() => {
    fetchData(moviePage);
  }, [moviePage]);

  useEffect(() => {
    if (searchQuery) {
      searchData(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (sortOption) {
      let sortedData = [...movieData];
      if (sortOption === "genre") {
        sortedData.sort((a, b) => a.genre_ids[0] - b.genre_ids[0]);
      } else if (sortOption === "vote_average") {
        sortedData.sort((a, b) => b.vote_average - a.vote_average);
      }
      setMovieData(sortedData);
    }
  }, [sortOption]);

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={searchData} />
      <SortDropdown onSortChange={handleSortChange} />
      <MovieList movieData={movieData} showMoreMovies={showMoreMovies} onMovieClick={handleMovieClick} />
      <Footer />
      {isModalOpen && <Modal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
}

export default App;
