import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import source from '../../Images/sourcecode.png'
import './About.css'


export default function About() {

    return (

        <section id='about'>

        <Grid container className='background'>
            <Grid item xs={12}>                    
                    <h1 className='title'>
                        About Me
                    </h1>
                 
                 <div>
                     I am a full stack developer interested in statistics, quantitative trading/research, data analysis, and machine learning. 
                 </div>
            </Grid>
            <Grid container spacing={0} style={{paddingBottom: '5vh'}}>

                <Grid item xs={6}>
                    <h1 className='subTitle'>
                        Contact Details

                    </h1>
                    <div id='details'>
                                Jacob Yeung<br/>
                                (510)-676-4096<br/>
                                jacobyeung01@gmail.com<br/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <h1 className='subTitle'>
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
