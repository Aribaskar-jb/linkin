// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCywA1H7oZWAsZftMtKOaSaNdd0dvQL8AE",
  authDomain: "linkedin-clone-7bb11.firebaseapp.com",
  projectId: "linkedin-clone-7bb11",
  storageBucket: "linkedin-clone-7bb11.appspot.com",
  messagingSenderId: "1002786863448",
  appId: "1:1002786863448:web:0b8263cf69c5e15f8ccd2d",
  measurementId: "G-LEXF2L3R4S"
};
// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth=firebase.auth();
export{db,auth};