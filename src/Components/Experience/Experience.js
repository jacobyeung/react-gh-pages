import React from 'react'
import { makeStyles } from '@material-ui/core'
import Cisco from '../../Images/cisco.png'
import Davis from '../../Images/davis.png'
import '../section.css'

export default function Experience() {
    return (
        <section id='experiences'>
        <div container className='background'>
            <div className='rowTitle'>
                
                    <h1 className='title'>
                        Experiences
                    </h1>
                
            </div>
            <div className='column1'>
                <img src={Cisco} className='logo'/>
            </div>
            <div className='column2'>
                <div className='row'>
                    <h2 className='subTitle'>
                        Cisco Systems
                    </h2>
                    <h3 className='subTitle'>
                        Software Engineering Intern, <em> &nbsp;Summer 2019</em>
                    </h3>
                    <div classname='row'>
                        Over the course of the summer, I developed a user dashboard using React as well as the backend APIs to send values from MongoDB to the dashboard.
                    </div>
                </div>
            </div>

            <div className='column1'>
                <img src={Davis} className='logo'/>
            </div>

            <div className='column2'>
                <div className='row'>
                    <h2 className='subTitle'>
                      University of California, Davis
                    </h2>
                    <h3 className='subTitle'>
                        Research Intern, <em> &nbsp;Summer 2017</em> 
                    </h3>
                    <div className='row'>
                        Developed a Perl program to generate a quasi-language based on digrams in an input file.
                    </div>
                </div>
            </div>



        </div>

        </section>

    )
}