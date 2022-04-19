// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk1ONRBuCRehHMPN_9vQmh81Xo4PRFeWY",
  authDomain: "dental-specialist.firebaseapp.com",
  projectId: "dental-specialist",
  storageBucket: "dental-specialist.appspot.com",
  messagingSenderId: "1051737455992",
  appId: "1:1051737455992:web:1c68a59eafd30443ec5c8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;