import React from 'react'
import { makeStyles } from '@material-ui/core'
import Cisco from '../Images/cisco.png'
import Grid from '@material-ui/core/Grid'
import Davis from '../Images/davis.png'
const styles = makeStyles(theme => ({
    background: {
        minHeight: '50vh',
        padding: '5vh'
    },    
    logo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '10vh'
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
        flex: 0.5,
        // fontSize: '5vh',
        alignItems: 'center',
        // height: '10vh',
        justifyContent: 'center'
    },
    ssTitle:{
        paddingLeft: '5vh',
        // paddingBottom: '5vh',
        flex: 1,
        // fontSize: '2.5vh'
    },
    subTitle: {
        flex: 1,
        // fontSize: '4vh',
        paddingLeft: '5vh',

    
    }
}));

export default function Experience() {
    const classes = styles();
    return (
        <Grid container className={classes.background} style={{borderBottomColor: 'black'}}>
            <Grid xs={12}>
                <div className={classes.title}>
                    <h1 style={{fontWeight: 'normal'}}>
                        Experiences
                    </h1>
                </div>
            </Grid>
            <Grid xs={6} className={classes.logo}>
                <img src={Cisco} style={{maxWidth: '50%', borderRadius: '10%'}}/>
            </Grid>
            <Grid xs={6} className={classes.content}>

                <div className={classes.subTitle}>
                    <h2 style={{fontWeight: 'normal'}}>
                        Cisco
                    </h2>
                    <div className={classes.ssTitle}>
                        <h3 style={{fontWeight: 'normal'}}>
                            Software Engineering Intern, <em>Summer 2019</em>
                        </h3>

                        <div>
                            Over the course of the summer, I developed a user dashboard using React as well as the backend APIs to send values from MongoDB to the dashboard.
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid xs={6} className={classes.logo}>
                <img src={Davis} style={{maxWidth: '50%', borderRadius: '10%'}} />
            </Grid>

            <Grid xs={6} className={classes.content}>
                <div className={classes.subTitle}>
                    <h2 style={{fontWeight: 'normal'}}>
                      University of California, Davis
                    </h2>
                    <div className={classes.ssTitle}>
                        <h3 style={{fontWeight: 'normal'}}>
                            Research Intern, <em>Summer 2017</em>
                        </h3>
                        <div>
                            Developed a Perl program to generate a quasi-language based on digrams in an input file.
                        </div>
                    </div>
                </div>
            </Grid>



        </Grid>

    )
}