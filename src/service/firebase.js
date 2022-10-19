import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1bvAsdRyUWgm1-DIoILkxJ0e-M6am0EM",
  authDomain: "gestionlabudem.firebaseapp.com",
  projectId: "gestionlabudem",
  storageBucket: "gestionlabudem.appspot.com",
  messagingSenderId: process.env.FIRE_MESSAGINID,
  appId: process.env.FIRE_APPID,
  measurementId: process.env.FIRE_MEASURENTID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const colRef = collection(firestore, 'users');

export { db, auth, firestore, colRef }