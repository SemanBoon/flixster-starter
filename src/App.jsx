// In App.js
import React, { useState, useEffect } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
// import Modal from "./Modal";


function App() {
  const [movieData, setMovieData] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const fetchData = async (pageNumber) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${pageNumber}`
    );
    const data = await response.json();
    setMovieData([...movieData, ...data.results]);
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

    useEffect(() => {
      showMoreMovies();
    }, []);


  useEffect(() => {
    fetchData(moviePage);
  }, [moviePage]);

  useEffect(() => {
    searchData();
  }, [searchQuery]);


  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={searchData} />
      <MovieList movieData={movieData} showMoreMovies={showMoreMovies} />
      <Footer />
    </div>
  );
}

export default App;
