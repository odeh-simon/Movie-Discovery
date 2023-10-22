import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import logoImage from './tv.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFilm,
  faTv,
  faCalendarAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';


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

  const releaseDate = new Date(movie.release_date);
  const releaseDateUTC = releaseDate.toUTCString();

  // Format runtime to hours and minutes
  const runtimeInMinutes = movie.runtime;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  const formattedRuntime = `${hours}h ${minutes}m`;


  return (
    <div>    <div className="movie-details-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className='logocontainer'>        <img src={logoImage} alt='logo' className='detail-logo' />
         <span className='logotitle'>MovieBox</span>
        </div>
  
        <div className="menu">
          <ul>
            <li className='flex-menu'>
              <a href="/">  <FontAwesomeIcon icon={faHome} className='icon' /> Home</a>
            </li>
            <li className='flex-menu'>  
              <a href="movie"> <FontAwesomeIcon icon={faFilm} className='icon' />Movies</a>
            </li>
            <li className='flex-menu'>
              <a href="/tv-series"> <FontAwesomeIcon icon={faTv} className='icon' /> TV Series</a>
            </li>
            <li className='flex-menu'>  
              <a href="/upcoming"><FontAwesomeIcon icon={faCalendarAlt} className='icon' /> Upcoming</a>
            </li>
          </ul>

          
          </div>

          <div className='sidebarbox'>
            <p style={{fontWeight:'bold'}}>play movie quizes and earn Free tickets</p>
            <span>50k people are playing now</span> <br />
            <button>Start Playing</button>
          </div>
       
        <div className="logout">
        <span className='logout-icon'> <FontAwesomeIcon icon={faSignOutAlt} /></span>
        <button className='logout-button'>  Logout</button>
        </div>
        
      </div>

      {/* Movie Details */}
     
      <div className="movie-details">
      <div className="movie-trailer"> 
      <img id='trailer' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} data-testid="movie-poster" />
        </div>
        <div className="movie-info">
          <div className='inline'>
          <span data-testid= "movie-title">{movie.title} | </span> 
           <span data-testid= "movie-release-date"> | {releaseDateUTC} | </span>
          <span data-testid= "movie-runtime"> |  {formattedRuntime} </span>
        
          </div>
          <div className="overview" data-testid= "movie-overview">{movie.overview}</div>
          <div className='moviecast'>
          <div >Driector: <span id='extra-details'> Joseph Kosinski</span> </div>
          <div>Writers: <span id='extra-details'> Jim Cash, Jack Epps Jr, Peter Craig</span> </div>
          <div>Stars: <span id='extra-details'> Tom Cruise, Jennifer Connelly, Miles Teller</span></div>
          </div>
        </div>
       
      </div>
    
    </div>
    <Footer />
    </div>

  );
}

export default MovieDetails;