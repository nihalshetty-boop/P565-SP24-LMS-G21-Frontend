import { FirebaseApp } from '../../lib/helper/firebaseClient';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export async function useSignup(e, p) {
    let auth = getAuth(FirebaseApp);
    createUserWithEmailAndPassword(auth, e, p)
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

export async function useSignup(e, p) {
    const { data, error } =  await supabase.auth.signUp({
        email: e,
        password: p,
    })
    if (error) throw new Error(error.message);
    console.log(data);

    return data;
}*/