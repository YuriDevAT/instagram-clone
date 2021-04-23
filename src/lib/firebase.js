import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTPUlo2OC6CpOthvCBY1pjG-q8Uh166y8",
    authDomain: "instagram-ig.firebaseapp.com",
    projectId: "instagram-ig",
    storageBucket: "instagram-ig.appspot.com",
    messagingSenderId: "117312774393",
    appId: "1:117312774393:web:47b30097a16309734f8228"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);
export { firebase, FieldValue };