import { FirebaseApp } from '../../lib/helper/firebaseClient';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

export async function useGoogleAuth() {
  let auth = getAuth(FirebaseApp);
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

/*import { supabase } from '../../lib/helper/supabaseClient';
//const [user, setUser] = useState(null);

export async function useGoogleAuth() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })
  if (error) throw new Error(error.message);
  
  return data;
}*/