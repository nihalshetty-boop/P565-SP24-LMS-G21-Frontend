import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaBRb4kvKkbyzonhe4OgMusvguc0asuaI",
  authDomain: "lmsproject-1f5c0.firebaseapp.com",
  projectId: "lmsproject-1f5c0",
  storageBucket: "lmsproject-1f5c0.appspot.com",
  messagingSenderId: "334848584616",
  appId: "1:334848584616:web:4dbc95b5479edb8093cb9d"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);