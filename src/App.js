import React from 'react';
import Navbar from './Components/Navbar'
import About from './Components/About';
import Education from './Components/Education'
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
      <About/>
      <Education/>
      
    </div>
  );
}

export default App;
