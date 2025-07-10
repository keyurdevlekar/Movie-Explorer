import React from 'react';
import MovieCard from './MovieCard';  // import the card component
import './MovieGrid.css';              // add grid styles here

function MovieGrid({ movies, onMovieClick }) {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => onMovieClick(movie.imdbID)}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
