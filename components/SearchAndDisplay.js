import React, { useState } from 'react';
import Movie from './Movie';
import $ from 'jquery';
// import { TOKEN } from '../config';
import './css/SearchCSS.css';

export default function SearchAndDisplay() {
  // states
  const [ userInput, setUserInput ] = useState('');
  const [ results, setResults ] = useState([]);

  const handleSearch = e => {
    // prevent default form behavior
    e.preventDefault();

    // if no input, return
    if (!userInput) return;

    // API url
    const url = `https://api.themoviedb.org/3/search/movie?query=${userInput}&language=en-US&page=1&include_adult=false`;

    // AJAX
    $.ajax({
      url,
      type: 'GET',
      dataType: 'json',
      headers: {
        Authorization: `Bearer ${TOKEN}`
      },
      success: data => {
        // if no results, handle errors
        if (!data.results.length) return handleErrors();

        // update results state
        setResults(data.results);

        // reset input
        setUserInput('');
      },
      error: (xhr, errorType, exception) => {
        // log error
        console.log('Search error:', xhr, errorType, exception);
        // handle error
        handleErrors();
      }
    });

    const handleErrors = () => {
      // toggle error class
      const $userInput = $('#userInput');
      $userInput.toggleClass('userInputError');

      // provide feedback
      setUserInput('No movie with that name.');

      // reset input
      setTimeout(() => {
        $userInput.toggleClass('userInputError');
        setUserInput('');
      }, 2000);
    };
  };

  return (
    <div>
      <form className='form' onSubmit={handleSearch}>
        <label htmlFor='userInput' className='label'>
          Movie Name
        </label>

        <input
          type='text'
          name='userInput'
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          className='input'
          id='userInput'
          placeholder='Jurassic Park'
        />

        <button type='submit' className='button'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {results.filter(result => result.poster_path).map(result => <Movie key={result.id} result={result} />)}
      </div>
    </div>
  );
}
