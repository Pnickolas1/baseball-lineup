import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineupInput from './LineupInput';
import LineupCard from './LineupCard';


  const startingLineup = [
    {
      "id": "peter",
      "name": "Peter Tountas",
      "position": "shortstop"
    },
    {
      "id": "jose",
      "name": "Jose Altuve",
      "position": "second base"
    },{
      "id": "bryce",
      "name": "Bryce Harper",
      "position": "Right Field"
    }
  ]

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Lineup Card</h1>
        </header>
        <LineupCard starters={startingLineup} />
        <LineupInput  />
      </div>
    );
  }
}

export default App;
