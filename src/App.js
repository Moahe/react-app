import React from 'react';
import logo from './flamingo.png';
import './App.css';
import './style.scss';

function renderConfetti(){
    const items = [];
    var i = 150;
    for(i; i>1; i-=1){
        items.push(<div className={"confetti-"+i} />);
    }
    return items;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo-op" alt="logo" />
          {renderConfetti()}
      </header>
    </div>
  );
}

export default App;
