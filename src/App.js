import React, { Component } from 'react';
import './App.css';
import Ship from './game/Ship';

class App extends Component {
  render() {

    Ship();

    return (
      <div className="App">
        <div id="myCanvas"></div>
      </div>
    );
  }
}

export default App;