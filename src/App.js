import React from 'react';
import Navbar from './Components/Navbar'
import Button from '@material-ui/core/Button'
import About from './Components/About';
import Education from './Components/Education'
import './App.css';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
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
      <div style={{backgroundColor: '#dfdfdf'}}>
        <Education/>
        <Experience/>
        <Skills/>
        <Button style={{alignItems: 'flex-start', display: 'flex'}}onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
          <img src={source} style={{height: '10vh'}}/> <br/>
          Source Code
        </Button>
      </div>
    </div>
  );
}

export default App;
