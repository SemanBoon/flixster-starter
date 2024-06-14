import React from 'react';

function Modal({ movie, onClose }) {
    if (!movie) return null;
  return(
        <div className="modal-overlay">
            <div className="modal-content">
                <h5>Hello{movie.title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                {/* <p><strong>Genre:</strong> {movie.genre_ids.join(', ')}</p> */}
                {/* /* <p><strong>Genre: </strong>{movie.genres.map((genre) => genre.name).join(", ")}</p>  */}
            </div>
            <button>
                <span className = "close-button" onClick={onClose}>close</span>
            </button>
        </div>
  )
};

export default Modal;
