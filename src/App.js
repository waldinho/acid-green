import React, { Component } from 'react';
import Header from './components/header';
import Matches from './components/matches';
import Buttons from './components/buttons';

class App extends Component {

  render() {
    return (
      <>
      <Header/>
      <Matches/>
      <Buttons/>
      </>
    );
  }
}

export default App;