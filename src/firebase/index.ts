import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASRoYdH7dK-IJGujTNSvof3RGPePebIbg",
  authDomain: "uzb-movie-app.firebaseapp.com",
  projectId: "uzb-movie-app",
  storageBucket: "uzb-movie-app.appspot.com",
  messagingSenderId: "852604167436",
  appId: "1:852604167436:web:55d3cc8c3d210509ab1529",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
