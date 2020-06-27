import React from 'react';
import './css/MovieCSS.css';

export default function Movie({ result }) {
  return (
    <div className='card'>
      <img src={`https://image.tmdb.org/t/p/w185/${result.poster_path}`} alt={result.title} className='card--image' />
      <div className='card--content'>
        <h3 className='card--title'>{result.title}</h3>
        <p>
          <small>RELEASE DATE: {result.release_date}</small>
        </p>
        <p>
          <small>RATING: {result.vote_average}</small>
        </p>
        <p className='card--desc'>{result.overview}</p>
      </div>
    </div>
  );
}
