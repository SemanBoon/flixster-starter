import React, {useState} from 'react';
import './SearchBar.css'

function SearchBar(){
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async (value) => {
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${moviePage}`);
        const data = await response.json();
        const resuults = data.filter[(user) => {
            return value && user && user.name && user.name.toLowerCase().includes(value);
        }];
        console.log(resuults);

    }


    const handleChange = (value) => {
        setSearchTerm(value);
        fetchData(value);
    }

    return(
        <div id= "search-bar-container">
            <input
            placeholder='Type to search...'
            value = {searchTerm}
            onChange={(e) => handleChange(e.target.value)}
            />
            <button className="search-button">Search</button>
        </div>
    )
}

export default SearchBar;
