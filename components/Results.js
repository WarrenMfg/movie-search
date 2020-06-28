import React from 'react';
import Movie from './Movie';
import './css/ResultsCSS.css';

export default function Results({ results }) {
  return (
    <div className='card-list'>
      {results.filter(result => result.poster_path).map(result => <Movie key={result.id} result={result} />)}
    </div>
  );
}
