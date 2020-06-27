import React, { useState } from 'react';
import $ from 'jquery';
import { token } from '../config';
import { handleErrors } from '../utils';
import './css/SearchCSS.css';

export default function Search() {
  // states
  const [ userInput, setUserInput ] = useState('');

  const handleSearch = e => {
    // prevent default form behavior
    e.preventDefault();

    // if no input, return
    if (!userInput) return;

    // API url
    const url = `https://api.themoviedb.org/3/search/movie?query=${userInput}&language=en-US&page=1&include_adult=false`;

    // fetch data from movie database
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(handleErrors)
      .then(data => {
        // if no results, throw
        if (!data.results.length) throw 'No movie with that name.';

        console.log('data.results', data.results);

        // reset input
        setUserInput('');
      })
      .catch(err => {
        // log error
        console.log('Search error:', err);

        // toggle error class
        // userInput.toggleClass('userInputError');
        document.getElementById('userInput').classList.add('userInputError');

        // provide feedback
        setUserInput('No movie with that name.');

        // reset input
        setTimeout(() => {
          // userInput.toggleClass('userInputError');
          document.getElementById('userInput').classList.remove('userInputError');
          setUserInput('');
        }, 2000);
      });
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
