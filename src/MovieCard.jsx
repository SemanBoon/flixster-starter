import './MovieCard.css';

function MovieCard(props) {
    return(
        <div className="movie-card">
            <img src={props.movieImage} alt="Movie Cover"/>
            <p>{props.movieTitle}</p>
            <p>{props.movieRating}</p>
        </div>
    )
}

export default MovieCard;
