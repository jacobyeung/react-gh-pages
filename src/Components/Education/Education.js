import React from 'react';
import { makeStyles } from '@material-ui/core';
import Berkeley from '../../Images/berkeley.png';
import '../section.css'

export default function Education() {
    return (
        <section id='education'>

        <div container className='row'>
            <div className='background'>
            <div className='rowTitle'>
                <h1 className='title'>
                    Education
                </h1>
            </div> 
            <div className='column1'>
                <img src={Berkeley} className='logo'/>
            </div>
            <div className='column2'>
                <div className='row'>
                    <h2 className='subTitle'>
                        University of California, Berkeley
                    </h2>
                </div>
                <h3 className='subTitle'>
                    B.S. in Computer Science, May 2022
                </h3>
                <h3 className='subTitle'>
                    B.A. in Statistics, May 2022
                </h3>
                <div className='row'>
                    I found a vast diversity of opportunities at UC Berkeley. 
                </div>
            </div>

            </div>
            


         </div>

        </section>

    )
}