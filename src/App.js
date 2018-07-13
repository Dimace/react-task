import React, { Component } from 'react';
import FilterableClientTable  from './components/FilterableClientTable/FilterableClientTable.js';
import Main from './components/Main/Main.js';
import './App.css';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Grid divided='vertically' centered>
        <FilterableClientTable />
        <Main />
      </Grid>
    );
  }
}

export default App;
