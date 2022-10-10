import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIRE_APIKEY,
  authDomain: "gestionlabudem.firebaseapp.com",
  projectId: "gestionlabudem",
  storageBucket: "gestionlabudem.appspot.com",
  messagingSenderId: process.env.FIRE_MESSAGINID,
  appId: process.env.FIRE_APPID,
  measurementId: process.env.FIRE_MEASURENTID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }