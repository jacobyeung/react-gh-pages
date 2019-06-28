import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles(theme =>({
    title: {
        flex: 0.5,
        fontSize: '5vh',
        textAlign: 'left',
        paddingTop: '5vh',
        paddingLeft: '5vh',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        height: '10vh'
    },
    background: {
        flex: 1,
        backgroundColor: '#dfdfdf',
        minHeight: '50vh'
    },
    ssTitle: {
        flex: 1,
        fontSize: '2.5vh',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        fontWeight: 'normal',
        paddingTop: '3vh',
    },
    subTitle: {
        flex: 1,
        fontSize: '4vh',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        paddingLeft: '5vh',
    
    },
    body: {
        fontSize: '2vh',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        fontWeight: 'normal',
        paddingTop: '3vh',
    }

}));

export default function Education() {
    const classes = styles();
    return (
        <Grid container className={classes.background}>
            <Grid xs={12}>
                <Paper className={classes.title}>
                    Education
                </Paper>
            </Grid>
            <Grid xs={6}>
                <Paper className={classes.subTitle}>
                    University of California, Berkeley
                    <Paper className={classes.ssTitle}>
                        B.S. in Computer Science, May 2022<br/>
                        B.A. in Statistics, May 2022<br/>
                    </Paper>
                    <Paper className={classes.body}>
                        UC Berkeley offered me a tremendous diversity of opportunity. 
                    </Paper>
                </Paper>
            </Grid>
            <Grid xs={6}>
                
            </Grid>
        </Grid>
    )
}