import React, { Component } from 'react';
import './App.css';
import Game from "./components/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <h2 className="App-title">Click Your Way To A Win!</h2>
          <h3 className="App-title">Current Score: {this.state.currentScore}</h3>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;


// check if card has been clicked and update score
// if clicked reset game..
// update best score
// figure out ui css