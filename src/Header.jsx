import "./Header.css";
import Sort from './Sort'
import SearchBar from "./SearchBar";
import NowPlaying from "./NowPlaying";

function Header() {
  return (
    <>
      <div className="header-container">
        <h1>Flixster</h1>
      </div>
      <div className="buttons">
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className = "now-playing-button" >
          <NowPlaying />
        </div>
        <div className="sort-dropdown">
          <Sort />
        </div>
      </div>
    </>
  )
}


{/* <SearchBar onSearch={searchData} />
            <Sort onSortChange={handleSortChange} />
            <NowPlaying onClick={handleNowPlayingClick} /> */}
export default Header;
