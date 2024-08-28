// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmbETJmPzg7A6lk1SWOwwS0hMOU_OJjeM",
  authDomain: "flashcardai-0824.firebaseapp.com",
  projectId: "flashcardai-0824",
  storageBucket: "flashcardai-0824.appspot.com",
  messagingSenderId: "777824158976",
  appId: "1:777824158976:web:f54ae42ca0da7a8ad51fe5",
  measurementId: "G-J5Z2VR6R3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);