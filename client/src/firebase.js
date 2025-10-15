import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEM5M0iNRhgzbeHkgVstn9abLoHZpAcik",
  authDomain: "project01-hpaan.firebaseapp.com",
  projectId: "project01-hpaan",
  storageBucket: "project01-hpaan.firebasestorage.app",
  messagingSenderId: "600671634297",
  appId: "1:600671634297:web:c92f4c087fc1dbda42e5a8",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
