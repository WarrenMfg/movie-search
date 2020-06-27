import React from 'react';

export default function Search() {
  return (
    <form className='form'>
      <label htmlFor='query' className='label'>
        Movie Name
        <input type='text' name='query' id='query' placeholder='Jurassic Park' />
        <button type='submit' className='button'>
          Search
        </button>
      </label>
    </form>
  );
}
