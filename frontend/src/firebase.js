// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpiHRrWT3HmhvhMcUraX09uEXSTifQ1oI",
  authDomain: "supmed-webapp-5f5b8.firebaseapp.com",
  projectId: "supmed-webapp-5f5b8",
  storageBucket: "supmed-webapp-5f5b8.appspot.com",
  messagingSenderId: "309991402629",
  appId: "1:309991402629:web:fcb57e7e8a83ebb1c48dec",
  measurementId: "G-VKTGRQ43RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
