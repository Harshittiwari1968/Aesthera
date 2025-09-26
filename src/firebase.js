// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq_x6aXEd2Aj8D8Q2mFuRLiL-7gSDtvF8",
  authDomain: "aesthera-7011b.firebaseapp.com",
  projectId: "aesthera-7011b",
  storageBucket: "aesthera-7011b.appspot.com",
  messagingSenderId: "218600768133",
  appId: "1:218600768133:web:cda27810a6752fe8595fec",
  measurementId: "G-E1S2Y0KX93"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Export the Auth and OTP functions
export { auth, RecaptchaVerifier, signInWithPhoneNumber };
