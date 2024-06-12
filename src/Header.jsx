import "./Header.css";
import SearchBar from './SearchBar'
import Sort from './Sort'

function Header() {
  return (
    <div className="header-container">
      <p>Flixster</p>
      <div className="button-container">
        <SearchBar/>
        <Sort/>
      </div>
    </div>
  );
}

export default Header;
