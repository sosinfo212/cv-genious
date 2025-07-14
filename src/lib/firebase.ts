import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJLymps6Lw3wD27FUCqTrzS0w40qwma9U",
  authDomain: "cv-genius-ai.firebaseapp.com",
  projectId: "cv-genius-ai",
  storageBucket: "cv-genius-ai.firebasestorage.app",
  messagingSenderId: "73603850304",
  appId: "1:73603850304:web:9377802bd3794eaab8ffa5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
