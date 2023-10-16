import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchModalRef = useRef(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery === '') {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const apiKey = '0dcbc831d0a9d8f6f721c7f83e9c4be8'; 
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Request failed.');
        }

        const data = await response.json();
        setSearchResults(data.results);
      } catch (err) {
        setError('An error occurred while fetching results.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchModalRef.current && !searchModalRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container">
      <input
        id="search-box"
        type="text"
        placeholder="Enter a movie title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} />

      {isLoading && <p>Loading...</p>}

      {error && <Error message={error} />}

      {searchResults.length > 0 && (
        <div className="search-modal" ref={searchModalRef}>
          {searchResults.map((movie) => ( <Link key={movie.id} to={`/movies/${movie.id}`} className="search-link">
              <div>{movie.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
