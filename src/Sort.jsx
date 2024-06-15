<<<<<<< HEAD
import "./Sort.css";


function Sort({ onSortChange }) {
    return (
      <div className="sort-dropdown">
        <label htmlFor="sort-options">Sort by: </label>
        <select id="sort-options" onChange={(e) => onSortChange(e.target.value)}>
          <option value="genre">Genre</option>
          <option value="vote_average">Rating</option>
          <option value="popularity">Popularity</option>
          <option value="release_date">Release Date</option>
          <option value="titleAsc">Title (A-Z)</option>
          <option value="titleDesc">Title (Z-A)</option>
        </select>
      </div>
    );
}


export default Sort;
=======
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
>>>>>>> 5e24a6a10b67e02e3ea1a95ba8a27bbb67edb044
