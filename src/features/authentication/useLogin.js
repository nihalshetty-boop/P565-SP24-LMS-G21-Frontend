import { FirebaseApp } from '../../lib/helper/firebaseClient';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// useLogin.js

export function useLogin(email, password) {
    const auth = getAuth(FirebaseApp);
    // Return the promise here
    return signInWithEmailAndPassword(auth, email, password);
}