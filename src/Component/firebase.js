import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaY01hib1NYq2p1BbH_Z9cJwxDlWfZzfs",
    authDomain: "hihi-3aa57.firebaseapp.com",
    databaseURL: "https://hihi-3aa57-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hihi-3aa57",
    storageBucket: "hihi-3aa57.appspot.com",
    messagingSenderId: "102057920907",
    appId: "1:102057920907:web:694e6fabd2466ee4f8c78e",
    measurementId: "G-XSZ47H0G8Z"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig);