import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const styles = {
  background: {
    borderBottom: "0px",
    background: 'linear-gradient(to bottom, #097DBC, #049FD9)',
    fontSize: 20
  },

}

export default class Navbar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };


  render() {
    return (
      <nav className="nav" id="navbar" style={styles.background}>
        <div className="nav-content" >
          <ul className="nav-items">
            <li className="nav-item" style={{padding: '0px 0px 0px 100px', color: 'white'}}>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <strong>About Me</strong>
              </Link>
            </li>
            <li className="nav-item" style={{color: 'white'}}>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item" style={{color: 'white'}}>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            <li className="nav-item" style={{color: 'white'}}>
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item" style={{color: 'white'}}>
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}