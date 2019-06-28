import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



const styles = makeStyles(theme => ({
    root: {
        flex: 1,
    },
    toolBar: {
        background: 'linear-gradient(to bottom, #00507399, #4881c799)',
        justifyContent: 'space-evenly',
    },
    button: {
        fontSize: 20,
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
            <Button color="inherit" className={classes.button}>Home</Button>
            <Button color="inherit" className={classes.button}>About Me</Button>
            <Button color="inherit" className={classes.button}>Education</Button>
            <Button color="inherit" className={classes.button}>Experience</Button>
            <Button color="inherit" className={classes.button}>Skills</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }