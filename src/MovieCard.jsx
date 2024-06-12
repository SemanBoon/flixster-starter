import './MovieCard.css';

function MovieCard(props) {
    return(
        <div className="movie-card">
            {/* add alt tag to img element */}
            <img src={props.movieImage}/>
            <p>{props.movieTitle}</p>
            <p>{props.movieRating}</p>
        </div>
    )
}

export default MovieCard;
