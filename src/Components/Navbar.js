import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-scroll'


const styles = makeStyles(theme => ({
    root: {
        flex: 1,
    },
    toolBar: {
        background: 'linear-gradient(to bottom, #00507399, #4881c799)',
        justifyContent: 'space-evenly',
    },
    button: {
        // fontSize: 20,
        textTransform: 'capitalize',
        // fontWeight: 'bold',
    }
}));

export default function Navbar() {
  const classes = styles();
    return (
      <div className={classes.root} >
        <AppBar position="fixed" className={classes.toolBar}>
          <Toolbar className={classes.toolBar}>
            <Button color="inherit" className={classes.button}>
            <Link
                activeClass='active'
                to='App'
                spy={true}
                smooth={true}
                duration={1200}>
                Home
              </Link>    
            </Button>
            <Button color="inherit" className={classes.button}>
            <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                duration={1200}>
                About
              </Link>    
            </Button>
            <Button color="inherit" className={classes.button}>
            <Link
                activeClass='active'
                to='education'
                spy={true}
                smooth={true}
                duration={1200}>
                Education
              </Link>    
            </Button>
            <Button color="inherit" className={classes.button}>
            <Link
                activeClass='active'
                to='experiences'
                spy={true}
                smooth={true}
                duration={1200}>
                Experiences
              </Link>            
              </Button>
            <Button color="inherit" className={classes.button}>
              <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                duration={1200}>
                Skills
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }