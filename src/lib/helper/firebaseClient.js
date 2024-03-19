import { initializeApp } from "firebase/app";
//import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaBRb4kvKkbyzonhe4OgMusvguc0asuaI",
  authDomain: "lmsproject-1f5c0.firebaseapp.com",
  projectId: "lmsproject-1f5c0",
  storageBucket: "lmsproject-1f5c0.appspot.com",
  messagingSenderId: "334848584616",
  appId: "1:334848584616:web:4dbc95b5479edb8093cb9d"
};

export const FirebaseApp = initializeApp(firebaseConfig);
//export const auth = FirebaseApp.auth();
export const firebase = firebase.firestore();

export const createUserDocument = async (user, aName, aLevel, aYear, aCourses, aDescription) => {
  if (!user) return;

  const userRef = firestore.doc(`student/${user.uid}`);

  const snapshot = userRef.get();

  if (!snapshot.exists) {
    const {email} = user;
    const {Name} = aName;
    const {Level} = aLevel;
    const {Year} = aYear;
    const {Courses} = aCourses;
    const {Description} = aDescription;

    try {
      userRef.set({
        Name,
        email,
        Level,
        Year, 
        Courses, 
        Description

      });
    }
    catch (error) {
      console.error("Error creating user document", error);
    }
  }
};