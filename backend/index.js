const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const fetch = require('node-fetch')
const API_PORT = 3001;
const app = express();
const sgMail = require('@sendgrid/mail');
const path = require('path')
app.use(cors());
const router = express.Router();

app.use(express.static(path.join(__dirname, 'client/build')))
// this is our MongoDB database
const dbRoute = process.env.DB_ROUTE
// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.message = message;
  data.id = id;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express'})
})

app.post('/send', (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const emailBody =
  {
    "personalizations": [
      {
        "to": [
          {
            "email": "hohorocks@gmail.com"
          }
        ]
      }
    ],
    "subject": "Hello, World!",

    "from": {
      "email": "jacobyeung01@gmail.com"
    },
    "content": [
      {
        "type": "text/plain",
        "value": "Hello, World!"
      }
    ]
  }

  console.log('Bearer ' + process.env.SENDGRID_API_KEY)
  var emailOptions = {
    'method': 'POST',
    'headers': {
      'Authorization': 'Bearer ' + process.env.SENDGRID_API_KEY,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(emailBody),
  }
  fetch('https://api.sendgrid.com/v3/mail/send', emailOptions)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch((error) => {
      console.log('error', error)
  })

})