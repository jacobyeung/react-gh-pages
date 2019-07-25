<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import './About.css'
import nodemailer from 'nodemailer'
var api_key = 'key-XXXXXXXXXXXXXXXXXXXXXXX';
var domain = 'www.mydomain.com';
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

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eacf865f3ab546",
    pass: "953b7157751684"
  }
});

const message = {
  from: 'hohorocks@gmail.com',
  to: '',
  subject: 'hi',
  text: 'test1'
}
transport.sendMail(message, (error, info) => {
  if (error) {
      console.log(error);
      info.status(400).send({success: false})
  } else {
      info.status(200).send({success: true});
  }
});
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

  handleSubmit = function(event) {
    event.preventDefault()
    const { Title, Email, Content } = this.state
    const form = axios.post('/api/form', {
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
=======
// /client/App.js
import React from 'react';
import axios from 'axios';

class Email extends React.Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:5000/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:5000/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:5000/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:5000/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };
>>>>>>> efa3046d4379389a2a8ca7732647efeb247bd7b6
}

export default Email;