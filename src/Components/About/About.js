import React from 'react';
import source from '../../Images/sourcecode.png'
import './About.css'


export default function About() {

    return (

        <section id='about'>

        <div className='backgroundAbout'>
            <div className='rowAbout'>                    
                <h1 className='titleAbout'>
                    About Me
                </h1>
            </div>
            <div className='rowAbout'>
                I am a full stack developer interested in statistics, quantitative trading/research, data analysis, and machine learning. 
            </div>
            <div className='column1About'>
                <div className='rowAbout'>
                    <h2 className='subTitleAbout'>
                        Contact Details
                    </h2>
                </div>

                <div className='rowAbout'>
                    Jacob Yeung
                <div className='rowAbout'>
                    (510)-676-4096
                </div>   
                <div classname='rowAbout'>
                    jacobyeung01@gmail.com
                </div> 
                </div>
            </div>
            <div className='column2About'>
                <button className='buttonAbout' onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
                    <img src={source} className='buttonIconAbout'/>
                    <div>
                        Source Code
                    </div>
                </button>
            </div>

            
            
        </div>

        </section>
    );
}
