import { doc, setDoc } from 'firebase/firestore';
import { FirebaseApp, db } from '../../lib/helper/firebaseClient';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

async function createUserInDB(uid, email, fullName, department, type, level, courses, qualification) {
    console.log(courses);
    if(qualification) { //If student
        await setDoc(doc(db, "students", uid), {
            Courses: courses,
            Level: level,
            Name: fullName,
            email: email,
            department: department
        });
    } else { // Else, must be instructor
        await setDoc(doc(db, "faculty", uid), {
            Classes: courses,
            Level: level,
            Name: fullName,
            email: email,
            department: department,
            qualification: qualification
        });
    }
}

export async function useSignup(email, password, fullName, department, type, level, courses, qualification) {
    const auth = getAuth(FirebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user);
        console.log(courses);
        createUserInDB(email, fullName, department, type, level, courses, qualification, userCredential.user.uid);
        return userCredential.user;
    }).catch((error) => {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
    })
}
