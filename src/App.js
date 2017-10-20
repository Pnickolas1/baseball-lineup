import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineupInput from './LineupInput';
import LineupCard from './LineupCard';


class App extends Component {
  state = {
    startingLineup :[
      {
        "id":"petertountas",
        "name": "Peter Tountas",
        "position": "shortstop"
      },
      {
        "id": "josealtuve",
        "name": "Jose Altuve",
        "position": "second base"
      },{
        "id": "bryceharper",
        "name": "Bryce Harper",
        "position": "Right Field"
      }
    ]
  }

  removePlayer = (player) => {
    this.setState((state) => ({
      startingLineup: state.startingLineup.filter((p) => p.id !== player.id )
    }))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Lineup Card</h1>
        </header>
        <LineupCard onDeletePlayer={this.removePlayer} starters={this.state.startingLineup} />
        <LineupInput  />
      </div>
    );
  }
}




export default App;
