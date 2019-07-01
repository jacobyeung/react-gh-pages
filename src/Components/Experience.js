import React from 'react';
import { makeStyles } from '@material-ui/core'
import Cisco from '../Images/cisco.png';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles(theme => ({
    background: {
        minHeight: '50vh',
        padding: '5vh'
    },    
    logo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'flex-start',
    },
    title: {
        display: 'flex',
        flex: 0.5,
        fontSize: '5vh',
        alignItems: 'center',
        paddingLeft: '5vh',
        height: '10vh'
    },
    ssTitle:{
        paddingLeft: '5vh',
        paddingBottom: '5vh',
        flex: 1,
        fontSize: '2.5vh'
    },
    subTitle: {
        flex: 1,
        fontSize: '4vh',
        paddingLeft: '5vh',

    
    }
}));

export default function Experience() {
    const classes = styles();
    return (
        <Grid container className={classes.background} style={{borderBottomColor: 'black'}}>
            <Grid xs={6} className={classes.logo}>
                <img src={Cisco} style={{maxWidth: '50vh'}}/>
            </Grid>
            <Grid xs={6} className={classes.content}>
                <div className={classes.title}>
                    Experiences
                </div>
                <div className={classes.ssTitle}>
                    Hi
                </div>
            </Grid>
        </Grid>

    )
}