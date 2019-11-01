import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
  
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
  }

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;