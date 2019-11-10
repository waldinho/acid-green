import React, { Component } from 'react';
import Header from './components/header';
import Matches from './components/matches';
import Buttons from './components/buttons';
import styled from 'styled-components';

const AppWrapper = styled.div`

`;

class App extends Component {

  render() {
    return (
      <AppWrapper>
        <Header/>
        <Matches/>
        <Buttons/>
      </AppWrapper>
    );
  }
}

export default App;