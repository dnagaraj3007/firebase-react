import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    // apiKey: "AIzaSyB7VXsD9zAMWo9OU6UneqfWzy1IEXmYe_Y",
    // authDomain: "react-auth-92355.firebaseapp.com",
    // databaseURL: "https://react-auth-92355.firebaseio.com",
    // projectId: "react-auth-92355",
    // storageBucket: "react-auth-92355.appspot.com",
    // messagingSenderId: "8975249340",
    // appId: "1:8975249340:web:3b262041b4c69ba2afc5b9",
    // measurementId: "G-3QPBHH844S"
    apiKey: 'AIzaSyAfPnL2iS__I8BcpOyQms_Q_5y-bYZEJyE',
    authDomain: 'mosahay-ui-testing.firebaseapp.com',
    databaseURL: 'https://mosahay-ui-testing.firebaseio.com',
    projectId: 'mosahay-ui-testing',
    storageBucket: 'mosahay-ui-testing.appspot.com',
    messagingSenderId: '232283871752',
    appId: '1:232283871752:web:a54e7b7f8149043e54cfbd',
    measurementId: 'G-22KG1TFC2Q'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
