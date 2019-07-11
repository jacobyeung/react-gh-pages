import React from 'react';
import Navbar from './Components/Navbar'
import Button from '@material-ui/core/Button'
import About from './Components/About';
import Education from './Components/Education'
import './App.css';
import Experience from './Components/Experience';
import Skills from './Components/Skills';


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
      <div style={{backgroundColor: '#dfdfdf'}}>
        <Education/>
        <Experience/>
        <Skills/>

      </div>
    </div>
  );
}

export default App;
