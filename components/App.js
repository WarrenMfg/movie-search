import React from 'react';
import SearchAndDisplay from './SearchAndDisplay';
import './css/AppCSS.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Movie Search</h1>
        <SearchAndDisplay />
      </div>
    );
  }
}

export default App;
