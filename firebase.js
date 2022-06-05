import firebase from 'firebase';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD8mt-bSLCDMVYs3ltxWw8ydiYQfRzZKWk",
  authDomain: "fbclone-fc0f1.firebaseapp.com",
  projectId: "fbclone-fc0f1",
  storageBucket: "fbclone-fc0f1.appspot.com",
  messagingSenderId: "436329357249",
  appId: "1:436329357249:web:8e05a59f5abc51c2221940"
}; 

const app = (!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage}