import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineupInput from './LineupInput';
import LineupCard from './LineupCard';
import shortid from 'shortid'

  const startingLineup = [
    {
      "id": shortid.generate(),
      "name": "Peter Tountas",
      "position": "shortstop"
    },
    {
      "id": shortid.generate(),
      "name": "Jose Altuve",
      "position": "second base"
    },{
      "id": shortid.generate(),
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
