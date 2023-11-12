// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWiCBPH1gkGZ3HR141fQQlIXc4hPz8vdI",
  authDomain: "netflix-gpt-84716.firebaseapp.com",
  projectId: "netflix-gpt-84716",
  storageBucket: "netflix-gpt-84716.appspot.com",
  messagingSenderId: "100482595264",
  appId: "1:100482595264:web:008c958904c47af0013025",
  measurementId: "G-QE90194RMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();