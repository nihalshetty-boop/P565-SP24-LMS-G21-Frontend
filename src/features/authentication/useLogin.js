import { FirebaseApp } from '../../lib/helper/firebaseClient';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export async function useLogin(e, p) {
    let auth = getAuth(FirebaseApp);
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

/*import { supabase } from '../../lib/helper/supabaseClient';
export async function useLogin(e, p) {
    const { data, error } =  await supabase.auth.signInWithPassword({
        email: e,
        password: p,
    })
    if (error) throw new Error(error.message);
    console.log(data);
    
    return data;
}*/