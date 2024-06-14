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
