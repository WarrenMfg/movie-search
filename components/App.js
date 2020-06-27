import React from 'react';
import Search from './Search';
import '../client/style.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Movie Search</h1>
        <Search />
      </div>
    );
  }
}

export default App;
