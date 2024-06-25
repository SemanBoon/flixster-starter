import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal({ movie, onClose, isOpen }) {
  const [idData, setIdData] = useState([]);
  const [videoLink, setVideoLink] = useState('');
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    if (movie) {
      const modalData = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&append_to_response=videos`
        );
        const data = await response.json();
        setIdData(data);

        fetchVideo(data);
      };

      modalData();
    }
  }, [movie]);

  const fetchVideo = async (data) => {
    const results = data.videos.results;
    if (results.length > 0) {
      const videoKey = results[0].key;
      setVideoLink(`https://www.youtube.com/embed/${videoKey}`);
    } else {
      setVideoLink('');
    }
  };

    if (!movie) return null;
        return(
                <div className="modal-overlay">
                  <div className="modal">
                    <div className="modal-content">
                      <div className="modal-body">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="modal-poster"
                        />
                        <div className="modal-details">
                          <h2>{movie.title}</h2>
                          <p>{movie.overview}</p>
                          <p className="release_date">Release Date: {movie.release_date}</p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <iframe
                          className="youtube-video"
                          src={videoLink}
                          title={movie.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <button>
                            <span className = "close-button" onClick={onClose}>close</span>
                      </button>
                    </div>
                  </div>
                </div>
            );

}

export default Modal;
