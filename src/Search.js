import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Import the MovieCard component
import Error from './Error'; // Import the Error component
import './App.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery === '') {
        setSearchResults([]); // Clear results if the search query is empty
        return;
      }

      setIsLoading(true);
      try {
        // Fetch search results based on searchQuery from the API
        // Handle any errors and update searchResults and error state
      } catch (err) {
        setError('An error occurred while fetching results.');
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchSearchResults function when searchQuery changes
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="search-container">
      
      <input id='search-box'
        type="text"
        placeholder="Enter a movie title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}

      {error && <Error message={error} />}

      <div className="search-results">
        {/* Use dynamic rendering for search results */}
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Search;
