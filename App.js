import React, { useState } from "react";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import "./App.css";

const API_KEY = "d1dc47db";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async () => {
    if (!query) return;
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  const openModal = async (id) => {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    const data = await res.json();
    setSelectedMovie(data);
  };

  const goHome = () => {
    setQuery("");
    setMovies([]);
    setSelectedMovie(null);
  };

  return (
    <div className="container">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>CINESPOT</h1>
        <button onClick={goHome} className="home-button">Home</button>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={() => openModal(movie.imdbID)} />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App;
