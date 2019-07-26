import React from 'react'
import Python from '../../Images/python.png'
import R from '../../Images/r.png'
import MERN from '../../Images/mern.png'
import Java from '../../Images/java.png'

export default function Skills() {
    return (
        <section id='skills'>
        <div container className='background'>
            <div className='rowTitle'>
                <h1 className='title'>
                    Skills
                </h1>
            </div>
            <div className='icons'>
                <button className='icon' onClick={() => window.open('https://github.com/jacobyeung/CS-188')}>
                    <img src={Python} className='buttons'/>
                    <div className='iconText'>Python</div>
                </button>
                <button className='icon' onClick={() => window.open('https://github.com/jacobyeung/Binomial_Package')}> 
                    <img src={R} className='buttons'/>
                    <div className='iconText'>R</div>
                </button>
                <button className='icon' onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
                    <img src={MERN} className='buttons'/>
                    <div className='iconText'>MERN Stack</div>
                </button>
                <button className='icon' onClick={() => window.open('https://github.com/jacobyeung/Cryptocurrency-Price-Analyzer')}>
                    <img src={Java} className='buttons'/>
                    <div className='iconText'>Java</div>
                </button>
            </div>
        </div>

        </section>
    )
}