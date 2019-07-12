import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Button from '@material-ui/core/Button'
import About from './Components/About/About';
import Education from './Components/Education/Education'
import './App.css';
<<<<<<< HEAD
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import source from './Images/sourcecode.png'
=======
import Experience from './Components/Experience';
import Skills from './Components/Skills';
>>>>>>> 20800ebae10c924a427691f5d21789929f004c62


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
<<<<<<< HEAD
        <Button className='button' onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
          <img src={source} className='image'/> <br/>
          Source Code
        </Button>
=======

>>>>>>> 20800ebae10c924a427691f5d21789929f004c62
      </div>
    </div>
  );
}

export default App;
