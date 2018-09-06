import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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