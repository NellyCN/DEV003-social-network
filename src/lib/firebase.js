// // REGISTRAR NUEVOS USUARIOS
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./configfirebase";

export const createUserEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export const signInUserEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      
}