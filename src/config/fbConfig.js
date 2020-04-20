import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA5E_wrUfJ0nhV6J2rfCQXBh5s1mBUR5iE",
    authDomain: "ayeshan-malinda-marioplan.firebaseapp.com",
    databaseURL: "https://ayeshan-malinda-marioplan.firebaseio.com",
    projectId: "ayeshan-malinda-marioplan",
    storageBucket: "ayeshan-malinda-marioplan.appspot.com",
    messagingSenderId: "1042657458242",
    appId: "1:1042657458242:web:2cebf55beb406bb13255db",
    measurementId: "G-MD4PWEMHRJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase 