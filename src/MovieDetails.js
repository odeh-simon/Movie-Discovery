import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';
import './App.css';
import Footer from './Footer';


function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movie_id } = useParams();

 

  useEffect(() => {
    const apiKey = '0dcbc831d0a9d8f6f721c7f83e9c4be8';
   

    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [movie_id]);
  

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>    <div className="movie-details-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">Your Logo</div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="movie">Movies</a>
            </li>
            <li>
              <a href="/tv-series">TV Series</a>
            </li>
            <li>
              <a href="/upcoming">Upcoming</a>
            </li>
            <li>
              <a href="/all">All</a>
            </li>
          </ul>
        </div>
       
        <div className="logout">
          <button>Logout</button>
        </div>
        
      </div>

      {/* Movie Details */}
     
      <div className="movie-details">
      <div className="movie-trailer"> <img id='trailer' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} data-testid="movie-poster" />
        </div>
        <div className="movie-info">
          <div className='inline'>
          <span data-testid= "movie-title">{movie.title} | </span> 
           <span data-testid= "movie-release-date"> | {movie.release_date} | </span>
          <span data-testid= "movie-runtime"> | {movie.runtime }min </span>
        
          </div>
          <div className="overview" data-testid= "movie-overview">{movie.overview}</div>
          <div >Driector: <span id='extra-details'> Joseph Kosinski</span> </div>
          <div>Writers: <span id='extra-details'> Jim Cash, Jack Epps Jr, Peter Craig</span> </div>
          <div>Stars: <span id='extra-details'> Tom Cruise, Jennifer Connelly, Miles Teller</span></div>
          
        </div>
       
      </div>
    
    </div>
    <Footer />
    </div>

  );
}

export default MovieDetails;
