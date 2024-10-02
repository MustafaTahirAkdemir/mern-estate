// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-e-5db30.firebaseapp.com",
  projectId: "mern-e-5db30",
  storageBucket: "mern-e-5db30.appspot.com",
  messagingSenderId: "286882278168",
  appId: "1:286882278168:web:c92e710ed1225f5ad08c6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);