import React from 'react';
import $ from 'jquery';
import { token } from '../config';
import { handleErrors } from '../utils';
import './css/SearchCSS.css';

export default function Search() {
  const handleSearch = async e => {
    // prevent default form behavior
    e.preventDefault();
    // get user input from form
    const userInput = $('#search');
    // if no input, return
    if (!userInput.val()) return;

    // fetch data from movie database
    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${userInput.val()}&language=en-US&page=1&include_adult=false`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
      .then(handleErrors)
      .then(console.log)
      .catch(console.error);

    userInput.val('');
  };

  return (
    <form className='form' onSubmit={handleSearch}>
      <label htmlFor='search' className='label'>
        Movie Name
      </label>

      <input type='text' name='search' className='input' id='search' placeholder='Jurassic Park' />

      <button type='submit' className='button'>
        Search
      </button>
    </form>
  );
}
