// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider  } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8kBROBXgPbXB7-Z3-SfxGytBpasGSw48",
  authDomain: "rj-43225.firebaseapp.com",
  projectId: "rj-43225",
  storageBucket: "rj-43225.appspot.com",
  messagingSenderId: "763795923557",
  appId: "1:763795923557:web:6ab19545826d500e4f1c8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()