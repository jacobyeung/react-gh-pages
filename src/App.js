import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Button from '@material-ui/core/Button'
import About from './Components/About/About';
import Education from './Components/Education/Education'
import './App.css';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import source from './Images/sourcecode.png'


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
      <div>
        <Education/>
        <Experience/>
        <Skills/>
        <Button className='button' onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
          <img src={source} className='image'/> <br/>
          Source Code
        </Button>
      </div>
    </div>
  );
}

export default App;
