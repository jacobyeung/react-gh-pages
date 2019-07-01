import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Berkeley from '../Images/berkeley.png';
const styles = makeStyles(theme =>({
    title: {
        display: 'flex',
        flex: 0.5,
        fontSize: '5vh',
        alignItems: 'center',
        paddingLeft: '5vh',
        height: '10vh'
    },
    background: {
        flex: 1,
        minHeight: '50vh'
    },
    ssTitle: {
        flex: 1,
        fontSize: '2.5vh',
        fontWeight: 'normal',

    },
    subTitle: {
        flex: 1,
        fontSize: '4vh',
        paddingLeft: '5vh',
        paddingBottom: '0'
    
    },
    body: {
        fontSize: '2vh',
        fontWeight: 'normal',
        flexShrink: 1,

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'flex-start',
        paddingBottom: '5vh'
    },
    logo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}));

export default function Education() {
    const classes = styles();
    return (
        <Grid container className={classes.background}>
            <Grid xs={6} className={classes.logo}>
                <img src={Berkeley} style={{maxWidth: '50vh'}}/>
            </Grid>
            <Grid xs={6} className={classes.content}>
                <div className={classes.title}>
                    Education
                </div>
                <div className={classes.subTitle}>
                    University of California, Berkeley
                    <div className={classes.ssTitle}>
                    <br/>
                        B.S. in Computer Science, May 2022<br/>
                        B.A. in Statistics, May 2022
                    </div>
                    <br/>
                    <div className={classes.body}>
                        I found a vast diversity of opportunities at UC Berkeley. 
                    </div>
                </div>


            </Grid>

        </Grid>
    )
}