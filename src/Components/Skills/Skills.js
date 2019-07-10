import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'
import Python from '../../Images/python.png'
import R from '../../Images/r.png'
import ReactJS from '../../Images/react.png'
import Java from '../../Images/java.png'

const styles = makeStyles(theme => ({
    background: {
        padding: '5vh'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: '10vh',

    },
    icons: {
        display: 'flex',
        justifyContent: 'space-around',

    }
}))

export default function Skills() {
    const classes = styles();
    return (
        <Grid container className={classes.background}>
            <Grid xs={12}>
                <div className={classes.title}>
                    <h1 style={{fontWeight: 'normal'}}>
                        Skills
                    </h1>
                </div>
            </Grid>
            <Grid container spacing={3} className={classes.icons}>
                <Button onClick={() => window.open('https://github.com/jacobyeung/CS-188')}>
                    <img src={Python} className={classes.button}/>
                </Button>
                <Button onClick={() => window.open('https://github.com/jacobyeung/Binomial_Package')}> 
                    <img src={R} className={classes.button}/>
                </Button>
                <Button onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
                    <img src={ReactJS} className={classes.button}/>
                </Button>
                <Button onClick={() => window.open('https://github.com/jacobyeung/Cryptocurrency-Price-Analyzer')}>
                    <img src={Java} className={classes.button}/>
                </Button>
            </Grid>

        </Grid>
    )
}