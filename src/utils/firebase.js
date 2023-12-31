// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLaesNeITaGXXa8ZQtVt158cf0gr9t8Mw",
  authDomain: "netflix-gpt-6c72c.firebaseapp.com",
  projectId: "netflix-gpt-6c72c",
  storageBucket: "netflix-gpt-6c72c.appspot.com",
  messagingSenderId: "607035959179",
  appId: "1:607035959179:web:5b91f335ce22f5bc47b18e",
  measurementId: "G-MW27ZDRJPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()