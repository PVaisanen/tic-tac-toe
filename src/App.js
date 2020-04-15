import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Style.css';
import Game from './components/Game';


function App() {
  return (
    <div className="App">

      <h1>Welcome to play Tic-Tac-Toe</h1>

      <Game />
 {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
