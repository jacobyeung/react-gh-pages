import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Berkeley from '../Images/berkeley.png';
const styles = makeStyles(theme => ({
    background: {
        padding: '5vh',
    },    
    logo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '5vh'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'flex-start',
        paddingBottom: '5vh',
    },
    title: {
        display: 'flex',
        // flex: 0.5,
        // fontSize: '5vh',
        alignItems: 'center',
        // height: '10vh',
        justifyContent: 'center',


    },
    ssTitle:{
        paddingLeft: '5vh',
        paddingBottom: '5vh',
        flex: 1,
        // fontSize: '2.5vh'
    },
    subTitle: {
        flex: 1,
        // fontSize: '4vh',
        paddingLeft: '5vh',
    },
}));
export default function Education() {
    const classes = styles();
    return (
        <section id='education'>

        <Grid container className={classes.background}>
            <Grid xs={12}>
                <div className={classes.title}>
                    <h1 style={{fontWeight: 'normal'}}>
                        Education
                    </h1>
                </div>
            </Grid>
            <Grid xs={6} className={classes.logo}>
                <img src={Berkeley} style={{maxWidth: '50%', borderRadius: '10%'}}/>
            </Grid>
            <Grid xs={6} className={classes.content}>
                <div className={classes.subTitle}>
                    <h2 style={{fontWeight: 'normal'}}>
                        University of California, Berkeley
                    </h2>
                    <div className={classes.ssTitle}>
                        <h3 style={{fontWeight: 'normal'}}>
                            B.S. in Computer Science, May 2022<br/>
                            B.A. in Statistics, May 2022
                        </h3>
                        <div>
                            I found a vast diversity of opportunities at UC Berkeley. 
                        </div>
                    </div>


                </div>


            </Grid>

        </Grid>

        </section>

    )
}