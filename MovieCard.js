import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="movie-card" onClick={onClick}>
      <img className="movie-poster" src={posterUrl} alt={movie.Title} />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        {/* If you have a rating, add it here, e.g.: */}
        {/* <p className="movie-rating">⭐ {movie.imdbRating || "N/A"}</p> */}
      </div>
    </div>
  );
};

export default MovieCard;
