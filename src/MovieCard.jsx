import './MovieCard.css';

function MovieCard({props, onClick}) {
    return(
        <div className="movie-card" onClick={() => onClick(movie)}>
            <img src={props.movieImage} alt="Movie Cover"/>
            <p>{props.movieTitle}</p>
            <p>{props.movieRating}</p>
        </div>
    )
}

export default MovieCard;
