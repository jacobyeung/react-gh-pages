import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Download from '@axetroy/react-download';
import Button from '@material-ui/core/Button';



const styles = makeStyles(theme =>({
    title: {
        flex: 1,
        fontSize: '5vh',
        textAlign: 'left',
        paddingTop: '5vh',
        paddingLeft: '5vh',
        color: 'white',
        backgroundColor: 'transparent'
    },
    subTitle: {
        flex: 1,
        fontSize: '4vh',
        textAlign: 'left',
        padding: '5vh',
        backgroundColor: 'transparent',
        color: 'white'

    },
    background: {
        background: '#39393b',
        minHeight: '50vh',

    },
    body: {
        flex: 1,
        fontSize: '3vh',
        color: '#c6c7ca',
        textAlign: 'left',
         padding: '5vh'

    },
    button: {
        backgroundColor: 'grey',
        color: 'white',
        textTransform: 'capitalize',

    }

}));

export default function About() {
    const classes = styles();

    return (


        <Grid container className={classes.background}>
            <Grid item xs={12} >
                <Paper className={classes.title} style={{boxShadow: 'none'}}>
                    About Me
                 <div className={classes.body}>
                     I am a full stack developer interested in statistics, quantitative trading/research, data analysis, and machine learning. 
                 </div>
                </Paper>
            </Grid>
            <Grid container spacing={2} style={{margin: '-16px'}}>

                <Grid item xs={6}>
                    <Paper className={classes.subTitle} style={{boxShadow: 'none'}}>
                        Contact Details
                            <div id='details' className={classes.body}>
                                Jacob Yeung<br/>
                                (510)-676-4096<br/>
                                jacobyeung01@gmail.com<br/>
                            </div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.subTitle} style={{boxShadow: 'none'}}>
                        <Download file="./resume/resume.pdf" content="">
                            <Button className={classes.button}>
                                Download Resume
                            </Button>
                        </Download>
                    </Paper>
                </Grid>

            </Grid>
            
        </Grid>
    );
}
