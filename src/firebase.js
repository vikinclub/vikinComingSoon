// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3uyaiNvQP5PnIIb_ZnRlH4D0PTSMnXLg",
  authDomain: "vikincomingsoonpage.firebaseapp.com",
  projectId: "vikincomingsoonpage",
  storageBucket: "vikincomingsoonpage.appspot.com",
  messagingSenderId: "543706471577",
  appId: "1:543706471577:web:0d5030148276e797aaec08",
  measurementId: "G-2P586WJR2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);