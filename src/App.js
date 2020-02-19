import React from 'react';
import logo from './flamingo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo-op" alt="logo" />
        <p>
          Jag älskar Beppe
        </p>
      </header>
    </div>
  );
}

export default App;
