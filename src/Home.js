import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';  // Import the MovieCard component
import Search from './Search';        // Import the Search component
import Error from './Error';          // Import the Error component
import Footer from './Footer';
import './App.css';


// ... Existing imports and code ...

function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '0dcbc831d0a9d8f6f721c7f83e9c4be8'; // TMDB API key
    const baseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/movie/top_rated';
    const queryParams = `?api_key=${apiKey}&language=en-US&page=1`;

    const apiUrl = baseUrl + endpoint + queryParams;

    // Fetch top-rated movie data from the API
    axios.get(apiUrl)
      .then((response) => {
        // Handle the response data here
        const topRatedMoviesData = response.data.results.slice(0, 11);
        const baseImageUrl = 'https://image.tmdb.org/t/p/w300/';

        // Update the poster_path for each movie with the complete URL
        const moviesWithCompletePosterUrls = topRatedMoviesData.map((movie) => ({
          ...movie,
          poster: baseImageUrl + movie.poster_path,
        }));

        setTopRatedMovies(moviesWithCompletePosterUrls);
      })
      .catch(() => {
        // Handle API request errors here
        setError('Error fetching top-rated movies. Please try again later.');
      });
  }, []);

  return (
    <div className="home-container">
      {error && <Error message={error} />}

      {/* Display the top-rated movie */}
      <section className="hero-section">
        {topRatedMovies.length > 0 && (
          <div>
            <img
              className="logo"
              src="tv.svg"
              alt="Website Logo"
            /><span>MovieBox</span>
            <div  className="hero-details">
            <h1 className='hero-title' style={{fontSize:50}}>{topRatedMovies[0].title}</h1>
           
            <p>
              {topRatedMovies[0].vote_average * 10}/100
            </p>
            <p>
             {topRatedMovies[0].overview}
            </p>
           
            </div>
            <button className="watch-trailer-button">Watch Trailer</button>
          </div>
        )}
        <div className="search-bar">
          <Search />
          
        </div>
       
      </section>
    
      <h3 id='featured'>Featured Movie </h3>
      
      
      

      {/* Display the movie grid */}
      <div className="featured-movies-container">
        {/* Use dynamic rendering for the movie grid */}
        
        {topRatedMovies.slice(1).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;