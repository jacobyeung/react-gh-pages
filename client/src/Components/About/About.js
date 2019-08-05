import React from 'react';
import './About.css'
import Email from './Email'


var api_key = 'a2921914d0fd2003a207f7a363392d78-c50f4a19-ba453e59';
var domain = 'https://api.mailgun.net/v3/jacobyeung.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


class About extends React.Component {

    render() {

        return (

            <section id='about'>
    
                <div className='backgroundAbout'>
                    <div className='rowAbout'>                    
                        <h1 className='titleAbout'>
                            About Me
                        </h1>
                    </div>
                    <div className='rowAboutInfo'>
                        I am a full stack developer interested in statistics, quantitative trading/research, data analysis, and machine learning. 
                    </div>
                    <div className='rowAbout'>
                        <div className='columnAbout'>
                            <div className='rowAbout'>
                                <h2 className='subTitleAbout'>
                                    Contact Details
                                </h2>
                            </div>
        
                            <div className='rowAbout'>
                                Jacob Yeung
                            </div>
                            <div className='rowAbout'>
                                (510)-676-4096
                            </div>   
                            <div classname='rowAbout'>
                                jacobyeung01@gmail.com
                            </div> 
                        </div>
                        <div className='columnAbout'>
                            <div className='rowAbout'>
                                <h2 className='subTitleAbout'>
                                    Suggestions
                                </h2>
                            </div>
                            <Email/>
                        </div>
                    </div>
                    
        
        
        
                    
                    
                </div>
    
            </section>
        );
    }
    
}

export default About;
