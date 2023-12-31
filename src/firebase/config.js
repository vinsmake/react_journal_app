// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzu5jsjCzMtZUJyW4xLOFCyFFMehgLEFM",
  authDomain: "react-cursos-431e7.firebaseapp.com",
  projectId: "react-cursos-431e7",
  storageBucket: "react-cursos-431e7.appspot.com",
  messagingSenderId: "425460731319",
  appId: "1:425460731319:web:79d41fad4345a2599dac32"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)