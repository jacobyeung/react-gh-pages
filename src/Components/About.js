import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Download from '@axetroy/react-download';
import Button from '@material-ui/core/Button';
import resume from './resume/resume.pdf'
import source from '../Images/sourcecode.png'


const styles = makeStyles(theme =>({
    title: {
        fontSize: '300%',
    },
    subTitle: {
        fontSize: '150%',

    },
    background: {
        display: 'flex',
        background: '#39393b',
        alignContent: 'flex-start',
        justifyContent: 'center',
        textAlign: '-webkit-center',
        fontWeight: 'normal',
        color: '#D3D3D3'
    },
    body: {


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

        <section id='about'>

        <Grid container className={classes.background}>
            <Grid item xs={12} >                    
                    <h1 className={classes.title}>
                        About Me
                    </h1>
                 
                 <div className={classes.body}>
                     I am a full stack developer interested in statistics, quantitative trading/research, data analysis, and machine learning. 
                 </div>
            </Grid>
            <Grid container spacing={0} style={{paddingBottom: '5vh'}}>

                <Grid item xs={6}>
                    <h1 className={classes.subTitle}>
                        Contact Details

                    </h1>
                    <div id='details' className={classes.body}>
                                Jacob Yeung<br/>
                                (510)-676-4096<br/>
                                jacobyeung01@gmail.com<br/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <h1 className={classes.subTitle}>
                        <Button style={{alignItems: 'center', justifyContent: 'center', display: 'flex', color: '#DFDFDF'}}onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
                            <img src={source} style={{height: '10vh', filter: 'invert(100%)'}}/>
                            <div>
                                Source Code
                            </div>
                        </Button>
                    </h1>
                </Grid>

            </Grid>
            
        </Grid>

        </section>
    );
}
