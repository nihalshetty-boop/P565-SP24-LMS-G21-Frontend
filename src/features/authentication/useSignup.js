import { doc, setDoc } from 'firebase/firestore';
import { FirebaseApp, db } from '../../lib/helper/firebaseClient';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export async function useSignup(email, password, fullName, department, level, qualification) {
    // const courses = [];
    const auth = getAuth(FirebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user);

         if(qualification === undefined) { //must be student
            setDoc(doc(db, "students", userCredential.user.uid), {
                Level: level,
                Name: fullName,
                email: email,
                department: department,
                courses: []
            });
        }
        else { //If instrcutor
    
            setDoc(doc(db, "faculty", userCredential.user.uid), {
                Level: level,
                Name: fullName,
                email: email,
                department: department,
                qualification: qualification,
                courses: []
            });
        }


        return userCredential.user;
    }).catch((error) => {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
    })
}
