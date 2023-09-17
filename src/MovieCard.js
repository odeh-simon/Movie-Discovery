import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function MovieCard({ movie }) {
  const [isRed, setIsRed] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the parent div
    setIsRed(!isRed);
  };

  return (
    <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className="movie-card" data-testid="movie-card">
        <div className="movie-poster-container">
          <img src={movie.poster} alt={movie.title} data-testid="movie-poster" />
     <button
            className="favorite-button"
            onClick={(e) => handleFavoriteClick(e)}
            style={{ color: isRed ? 'red' : 'white' }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <p data-testid="movie-release-date">{movie.release_date}</p>
          <h2 data-testid="movie-title">{movie.title}</h2>
       
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
