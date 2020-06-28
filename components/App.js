import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';
import './css/AppCSS.css';

export default function App() {
  const [ results, setResults ] = useState([]);

  return (
    <div className='container'>
      <h1 className='title'>Movie Search</h1>
      <Search setResults={setResults} />
      <Results results={results} />
    </div>
  );
}
