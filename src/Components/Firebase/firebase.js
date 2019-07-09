import app from 'firebase/app'

const config = {
    apiKey: "AIzaSyALDDgm-TS-xTnBYG4zdd-LeS8sXVQs-zA",
    authDomain: "jacobyeung-1.firebaseapp.com",
    databaseURL: "https://jacobyeung-1.firebaseio.com",
    projectId: "jacobyeung-1",
    storageBucket: "",
    messagingSenderId: "691084501484",
    appId: "1:691084501484:web:af4432e63f532324"
  }

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  
  export default Firebase;