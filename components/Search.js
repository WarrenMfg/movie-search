import React from 'react';
import $ from 'jquery';
import './css/SearchCSS.css';

export default function Search() {
  const handleSearch = async e => {
    e.preventDefault();
    const userInput = $('#search');
    console.log('userInput', userInput.val());

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
