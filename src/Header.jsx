import "./Header.css";
import Sort from './Sort'

function Header() {
  return (
    <div className="header-container">
      <h1>Flixster</h1>
      <div className="button-container">
        <Sort/>
      </div>
    </div>
  );
}

export default Header;
