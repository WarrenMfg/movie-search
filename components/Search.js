import React, { useState } from 'react';
import $ from 'jquery';
import './css/SearchCSS.css';

export default function Search({ setResults }) {
  // states
  const [ userInput, setUserInput ] = useState('');

  const handleSearch = e => {
    // prevent default form behavior
    e.preventDefault();

    // if no input, return
    if (!userInput) return;

    // API url
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ad9bcd4ef3dc30870f256fa4c8ff9904&query=${userInput}&language=en-US&page=1&include_adult=false`;

    // AJAX
    $.ajax({
      url,
      type: 'GET',
      dataType: 'json',
      success: data => {
        // if no results, handle errors
        if (!data.results.length) return handleErrors('No movie with that name.');

        // update results state
        setResults(data.results);

        // reset input
        setUserInput('');
      },
      error: (xhr, errorType, exception) => {
        // log error
        console.log('Search error:', xhr, errorType, exception);
        // handle error
        handleErrors('Sorry, an error has occurred.');
      }
    });

    const handleErrors = feedback => {
      // toggle error class
      const $userInput = $('#userInput');
      $userInput.toggleClass('userInputError');

      // provide feedback
      setUserInput(feedback);
      $userInput.blur();

      // reset input
      setTimeout(() => {
        $userInput.toggleClass('userInputError');
        setUserInput('');
        $userInput.focus();
      }, 2000);
    };
  };

  return (
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
  );
}
