import './MovieCard.css';

function MovieCard({movie, onClick}) {
    return(
        <div className="movie-card" onClick={() => onClick(movie)}>
            <img src={props.movieImage} alt="Movie Cover"/>
            <p>{movie.movieTitle}</p>
            <p>{movie.movieRating}</p>
        </div>
    )
}

export default MovieCard;
