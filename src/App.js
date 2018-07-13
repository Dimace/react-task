import React, { Component } from 'react';
import FilterableClientTable  from './components/FilterableClientTable/FilterableClientTable.js';
import Main from './components/Main/Main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableClientTable />
        <Main />
      </div>
    );
  }
}

export default App;
