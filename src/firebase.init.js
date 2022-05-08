// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAFEX-n_mPSO18mnupWQaHD4uo3ZP0bqVU",
  authDomain: "skyland-computer.firebaseapp.com",
  projectId: "skyland-computer",
  storageBucket: "skyland-computer.appspot.com",
  messagingSenderId: "639620720531",
  appId: "1:639620720531:web:617ae87b53b513dca8ea66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;