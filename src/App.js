import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineupInput from './LineupInput';
import LineupCard from './LineupCard';


class App extends Component {
  state = {
    startingLineup :[]
  }

  removePlayer = (player) => {
    this.setState((state) => ({
      startingLineup: state.startingLineup.filter((p) => p.id !== player.id )
    }))
  }

  createPlayer(player){
    this.setState(state => ({
      startingLineup: state.startingLineup.concat([player])
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
        <LineupInput onPlayerCreate={(player) => {
          this.createPlayer(player)
          }}  
        />
      </div>
    );
  }
}




export default App;
