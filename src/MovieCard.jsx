import './MovieCard.css';

function MovieCard({props, onClick}) {
    return(
<<<<<<< HEAD
        <div className="movie-card" onClick={props.onClick}>
=======
        <div className="movie-card" onClick={() => onClick(movie)}>
>>>>>>> 5e24a6a10b67e02e3ea1a95ba8a27bbb67edb044
            <img src={props.movieImage} alt="Movie Cover"/>
            <p>{props.movieTitle}</p>
            <p>Rating: {Number(props.movieRating).toFixed(1)}</p>
        </div>
    )
}

export default MovieCard;
