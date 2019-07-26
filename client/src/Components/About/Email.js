import React from 'react';
import axios from 'axios';
import './About.css'

// var mailgun = require('mailgun-js')({apiKey: 'edd64e1dc48ff41a81da39d2f7a16101-c50f4a19-44cf626b', domain: 'jacobyeung.org'});
 
// var data = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'serobnic@mail.ru',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomeness!'
// };
 
// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
// });

class Email extends React.Component {
  // our put method that uses our backend api
  // to create new query into our data base
  // putDataToDB = (message) => {
  //   let currentIds = this.state.data.map((data) => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post('http://localhost:3001/api/putData', {
  //     id: idToBeAdded,
  //     message: message,
  //   });
  // };

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
  componentDidMount = () => this.fetchAPIMessage()

  fetchAPIMessage = async () => {
    try {
      const res = await fetch(`/api/message`);
      const { message } = await res.json();
      this.setState({ message });
    } catch (err) {
      console.error(err);
    }
  };
  handleSubmit = function(event) {
    event.preventDefault()
    const { Title, Email, Content } = this.state
    axios.post('/send', {
      Title,
      Email,
      Content
    })
    
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
    return(
      <form action='/contact' className='rowAbout' onSubmit={this.handleSubmit} method='POST'>
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
          <button
          className='submitButton'
          type='submit'>
              Send Email
          </button>
        </div>

      </form>
    )
  }
}

export default Email;