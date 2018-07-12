import React, { Component } from 'react';
import FilterableClientTable  from './components/FilterableClientTable/FilterableClientTable.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableClientTable />
      </div>
    );
  }
}

export default App;
