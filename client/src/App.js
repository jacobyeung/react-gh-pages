import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About';
import Education from './Components/Education/Education'
import './App.css';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer'


class App extends React.Component {

  render() {
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
        <Experience/>
        <Skills/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
