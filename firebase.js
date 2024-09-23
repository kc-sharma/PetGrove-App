// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Optionally import analytics if you need it
// import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2XM5LFUMTPEkdNbiIF9j3lxYPwC0feGg",
  authDomain: "first-app-1296e.firebaseapp.com",
  projectId: "first-app-1296e",
  storageBucket: "first-app-1296e.appspot.com",
  messagingSenderId: "858551464093",
  appId: "1:858551464093:web:a306605a5a70c586756474",
  measurementId: "G-WGW2NZVHGH",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth with AsyncStorage persistence

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };

// Optional: If you want to use analytics
// const analytics = getAnalytics(app);
