// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// filepath: c:\Users\Faizan\Desktop\React_Native Expo\space-cool\space-cool\firebaseConfig.js
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANSMCnoi5RVMZ5VhAkqeW8lISAJpNl8ZI",
  authDomain: "spaceskool-93df5.firebaseapp.com",
  projectId: "spaceskool-93df5",
  storageBucket: "spaceskool-93df5.firebasestorage.app",
  messagingSenderId: "469470469770",
  appId: "1:469470469770:web:5bd6c5f3c5138675a8d773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
// const auth = getAuth(app);
export { auth, firestore };

