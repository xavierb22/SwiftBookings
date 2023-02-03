// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsmL2_zYklWfRwYoCzyels4PIGb_cOxhk",
  authDomain: "swiftapp-b9d25.firebaseapp.com",
  projectId: "swiftapp-b9d25",
  storageBucket: "swiftapp-b9d25.appspot.com",
  messagingSenderId: "415133406833",
  appId: "1:415133406833:web:ec4af09885d95f2d206dd0",
  measurementId: "G-T3Z69MEK0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);