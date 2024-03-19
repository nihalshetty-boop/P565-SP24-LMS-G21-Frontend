import { FirebaseApp } from '../../lib/helper/firebaseClient';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export async function useLogin(e, p) {
    const auth = getAuth(FirebaseApp);
    signInWithEmailAndPassword(auth, e, p)
    .then((userCredential) => {
        console.log(userCredential.user);
        return userCredential.user;
    }).catch((error) => {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
    })
    
}
