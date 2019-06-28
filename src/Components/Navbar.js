import React from 'react';
import StyleSheet from 'react-native';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    toolBar: {
        background: 'linear-gradient(to bottom, #00507399, #4881c799)',
        justifyContent: 'space-evenly',
    },
    button: {

    }
});

export default function ButtonAppBar() {
  
    return (
      <div style={styles.root} >
        <AppBar position="fixed" style={styles.toolBar}>
          <Toolbar style={styles.toolBar}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Education</Button>
            <Button color="inherit">Experience</Button>
            <Button color="inherit">Skills</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }