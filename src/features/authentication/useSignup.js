import { FirebaseApp } from '../../lib/helper/firebaseClient';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { createUserDocument } from '../../lib/helper/firebaseClient';

export async function useSignup(e, p) {
    let auth = getAuth(FirebaseApp);
    const { e, p, Name, Level, Year, Courses, Description} = this.state;

    createUserWithEmailAndPassword(auth, e, p, Name, Level, Year, Courses, Description)
    .then(async (userCredential) => {
        console.log(userCredential.user);
        await createUserDocument(e, Name, Level, Year, Courses, Description);
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