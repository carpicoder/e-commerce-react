// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmkDVYr6MG8Cmpr36mRjmWn4XdDBOMo_0",
  authDomain: "carpishop-2a8fd.firebaseapp.com",
  projectId: "carpishop-2a8fd",
  storageBucket: "carpishop-2a8fd.appspot.com",
  messagingSenderId: "640140898456",
  appId: "1:640140898456:web:c28ce1ae8767762939e0ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);