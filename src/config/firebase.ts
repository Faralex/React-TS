// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdXxWWUCncJkJ_bC5Hzerb7nWFJLzIvuc",
  authDomain: "react-project-99e48.firebaseapp.com",
  projectId: "react-project-99e48",
  storageBucket: "react-project-99e48.appspot.com",
  messagingSenderId: "43140744858",
  appId: "1:43140744858:web:566e053a96ab3845490123",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)