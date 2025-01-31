// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnVmf3AiyCv0863ajgmK2PwxNicW0E11k",
  authDomain: "abd-website-24b39.firebaseapp.com",
  projectId: "abd-website-24b39",
  storageBucket: "abd-website-24b39.firebasestorage.app",
  messagingSenderId: "685217618700",
  appId: "1:685217618700:web:28b507b7669e0a2cb80729",
  measurementId: "G-5CG3ZRBT9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);