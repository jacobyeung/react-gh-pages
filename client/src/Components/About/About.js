import React from 'react';
import source from '../../Images/sourcecode.png'
import './About.css'
import axios from 'axios'

var api_key = 'a2921914d0fd2003a207f7a363392d78-c50f4a19-ba453e59';
var domain = 'https://api.mailgun.net/v3/jacobyeung.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'serobnic@mail.ru',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Email: '',
            Content: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    handleSubmit = function(event) {
        event.preventDefault()
        //Write send email function here
        this.setState({
            Title: '',
            Email: '',
            Content: '',
        })
    }
    changeHandler (event) {
        this.setState({[event.target.name]: event.target.value})
    }
    render() {

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
                            <button className='buttonAbout' onClick={() => window.open('https://github.com/jacobyeung/react-gh-pages')}>
                                <img src={source} className='buttonIconAbout'/>
                                <div className='rowAbout'>
                                    Website Source Code
                                </div>
                            </button>
                        </div>
                        <div className='columnAbout'>
                            <div className='rowAbout'>
                                <h2 className='subTitleAbout'>
                                    Suggestions
                                </h2>
                            </div>
                            
                            <form className='rowAbout' onSubmit={this.handleSubmit} method='POST'>
                                <div className='formCol'>
                                    <div className='formTitle'>Title</div>
                                    <input
                                    type='Title'
                                    name='Title'
                                    value={this.state.Title}
                                    onChange={this.changeHandler}
                                    className='inputBox'
                                    placeholder='Enter your title here'
                                    required/>
                                </div>
                                <div className='formCol'>
                                    <div className='formTitle'>Email</div>
                                    <input
                                    type='Email'
                                    name='Email'
                                    value={this.state.Email}
                                    onChange={this.changeHandler}
                                    className='inputBox'
                                    placeholder="Optional, without email I can't respond"/>
                                </div>
                                <div className='formCol'>
                                    <div>Content</div>
                                    <input
                                    type='Content'
                                    name='Content'
                                    value={this.state.Content}
                                    onChange={this.changeHandler}
                                    className='inputBoxContent'
                                    placeholder='Enter your feedback here'
                                    required/>
                                </div>
                                <div className='formRow'>
                                    <div className='fillerDiv'></div>
                                    <button
                                    className='submitButton'
                                    type='submit'>
                                        Send Email
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                    
        
        
        
                    
                    
                </div>
    
            </section>
        );
    }
    
}

export default About;
