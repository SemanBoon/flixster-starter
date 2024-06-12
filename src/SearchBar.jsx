import './SearchBar.css'

function SearchBar(){
    return(
        <div id= "search-bar-container">
            <input className="search-input" />
            <button className="search-button">Search</button>
        </div>
    )
}

export default SearchBar;
