import React from 'react';
import Home from './Home';
import MovieDetails from './MovieDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies/:movie_id' element={<MovieDetails />}></Route>
      
      
        </Routes>
    </div>
  );
}

export default App;
