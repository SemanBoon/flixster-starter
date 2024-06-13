//in search.js
import React, {useState} from 'react';
import './SearchBar.css'

function SearchBar({onSearch}){
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        // onSearch(searchTerm);
    }

    const handleSearch = () => {
        onSearch(searchTerm);
    }

    return(
        <div id= "search-bar-container">
            <input
            placeholder='Type to search...'
            value = {searchTerm}
            onChange={handleChange}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;
