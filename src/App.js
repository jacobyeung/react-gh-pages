import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import aboutMe from './Components/aboutMe';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">

          <em>Hello, I'm</em>
          <h1>
          — Jacob Yeung —
          </h1>
          </header>

      <div className="About Me" style={{color: 'white', fontSize: 15}}>
        <Section
            title="About Me"
            subtitle={aboutMe}
            background="#2b2b2b"
            id="section1"
          />
      </div>
        
        <Section
          title="Section 2"
          subtitle={"Coming Soon"}
          background="white"
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={"Coming Soon"}
          background="white"
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={"Coming Soon"}
          background="white"
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={"Coming Soon"}
          background="white"
          id="section5"
        />
      </div>
    );
  }
}

export default App;
