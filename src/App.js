import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar'
import Background from './Components/background';
import './App.css';

function App() {
  return (
    <div id="App">
      <Navbar/>
      <header className="App-header">
        <em>
          Hi, I'm
        </em>
        <h1>
          — Jacob Yeung —
        </h1>

      </header>
    </div>
  );
}

export default App;
