import { FirebaseApp } from '../../lib/helper/firebaseClient';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

export async function useGoogleAuth() {
  const auth = getAuth(FirebaseApp);
  signInWithRedirect(auth, googleProvider)
  .then((userCredential) => {
    console.log(userCredential.user);
    return userCredential.user;
  }).catch((error) => {
    // Handle Errors here.
    console.log(error.code);
    console.log(error.message);
  })
}
