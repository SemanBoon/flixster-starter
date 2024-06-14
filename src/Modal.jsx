import React, { useEffect } from 'react';
import '/.Modal.css';

function Modal({ movie, onClose }) {
    if (!movie) return null;
  return(
        <div id="my-modal" class="modal-overlay">
            <div class="modal-content">
                <h5>{movie.title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={selectedMovie.title} />
                <p>{movie.overview}</p>
                <p><strong>Release Date:<strong/> {movie.release_date}</p>
                <p><strong>Genre:</strong> {movie.genre_ids.join(', ')}</p>
                <p><strong>Genre: </strong>{movie.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
            <button>
                <span class = "close-button" onClick={onClose}>close</span>
            </button>
        </div>
  )
};

export default Modal;
