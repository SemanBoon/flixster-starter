import './MovieCard.css';

function MovieCard(props) {
    return(
        <div className="movie-card" onClick={props.onClick}>
            <img src={props.movieImage} alt="Movie Cover"/>
            <p>{props.movieTitle}</p>
            <p>Rating: {Number(props.movieRating).toFixed(1)}</p>
        </div>
    )
}

export default MovieCard;
