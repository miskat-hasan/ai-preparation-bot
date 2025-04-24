import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeI3Cvl3JGNNM2vZ_TLxB5ix7uRc1sZ54",
  authDomain: "prepwise-903c4.firebaseapp.com",
  projectId: "prepwise-903c4",
  storageBucket: "prepwise-903c4.firebasestorage.app",
  messagingSenderId: "918958555239",
  appId: "1:918958555239:web:5529d0a267de5c6e84d4c2",
  measurementId: "G-DEKKYPX6ZY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);