// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-m5xxlWrbXF45fpAREZ9dJNh2f_E7rAg",
  authDomain: "storrier-7d438.firebaseapp.com",
  projectId: "storrier-7d438",
  storageBucket: "storrier-7d438.appspot.com",
  messagingSenderId: "421343024625",
  appId: "1:421343024625:web:9a7a3a58d5a7669f58a050",
  measurementId: "G-VJPGQDRR4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
