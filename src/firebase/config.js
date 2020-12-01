import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YIzaSyCNz-KfU73ZMCenMf8Z9EcVZoythTREvyA",
  authDomain: "image-gallery-d62c3.firebaseapp.com",
  databaseURL: "https://image-gallery-d62c3.firebaseio.com",
  projectId: "image-gallery-d62c3",
  storageBucket: "image-gallery-d62b5.appspot.com",
  messagingSenderId: "126090980133",
  appId: "9:126090980620:web:b6e2de24ae9c9812c16d21"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };