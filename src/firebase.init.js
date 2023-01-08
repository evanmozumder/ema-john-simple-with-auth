// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCncgpkXZ24lUpwAV4ft9tjigf1buFzLDs",
  authDomain: "router-firebase-inte-practice.firebaseapp.com",
  projectId: "router-firebase-inte-practice",
  storageBucket: "router-firebase-inte-practice.appspot.com",
  messagingSenderId: "411816599016",
  appId: "1:411816599016:web:3a740de6bf3d8492f0585d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
