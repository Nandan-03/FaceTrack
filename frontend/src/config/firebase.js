// Firebase Configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuratio
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe14-1RoJI9kzMEtJYCfhjSnr8bpmk7tA",
  authDomain: "facetracker-fd699.firebaseapp.com",
  projectId: "facetracker-fd699",
  storageBucket: "facetracker-fd699.appspot.com",
  messagingSenderId: "395607773548",
  appId: "1:395607773548:web:a147719762ce5efef52349",
  measurementId: "G-0M6WFMJX6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, analytics, firebaseConfig, db };