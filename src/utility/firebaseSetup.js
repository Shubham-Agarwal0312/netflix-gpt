// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXBVMffsCkGEogAT0ANAtSniLuwlhA4_8",
  authDomain: "netflix-gpt-a2cb0.firebaseapp.com",
  projectId: "netflix-gpt-a2cb0",
  storageBucket: "netflix-gpt-a2cb0.appspot.com",
  messagingSenderId: "914330172051",
  appId: "1:914330172051:web:f898475aa711df1b746b66",
  measurementId: "G-T78MC4RQWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();