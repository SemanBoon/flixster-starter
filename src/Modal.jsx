// import React, { useEffect } from 'react';
// import '/.Modal.css';

// const Modal = ({selectedMovie}) => {
//     useEffect(() => {
//         return () => {
//             setisModalOpen(false);
//         };
//     }, []);
//   return (
//     <>
//         <div id="my-modal" class="modal-overlay">
//             <div class="modal-content">
//                 <h5>{selectedMovie.title}</h5>
//                 <img src={selectedMovie.poster_path} alt={selectedMovie.title} />
//                 <p>{selectedMovie.overview}</p>
//                 <p>Release Date: {selectedMovie.release_date}</p>
//                 <p>Genre: {selectedMovie.genres.map((genre) => genre.name).join(", ")}</p>
//             </div>

//             <button>
//                 <span class = "close-button">close</span>
//             </button>
//         </div>
//     </>
//   )
// };
