// REGISTRAR NUEVOS USUARIOS
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, addDoc, query, onSnapshot, orderBy, deleteDoc, doc} from 'firebase/firestore';
import { auth, db } from './configfirebase'; //db

// **** CREA UN USUARIO NUEVO CON EMAIL Y PASSWORD ****

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
};

// **** LOGUEO CON EMAIL Y PASSWORD ****
export const signInUserEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// **** CREAR POST EN FIRESTORE DESDE EL TEMPLATE ****
export const createPost = async (user, comment) => {
    // Add a new document with a generated id.
    const documentReference = await addDoc(collection(db, "posts"), {
        // userID: auth.currentUser.uid,
        user,
        date: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
        comment,
    });
    console.log("Document written with ID: ", documentReference.id);
};

// **** TRAE LOS POSTS DE FIRESTORE ****
export const getPosts = async () => onSnapshot(query(collection(db, 'posts'), orderBy(date, 'desc')), callback);

// **** TRAE LOS POST DE FIRESTORE Y LOS MUESTRA EN TIEMPO REAL ****
export const getPostsOnSnapShot = async (callback) => {  // se asegura de que la función devuelva una promesa
    const queryDb = await onSnapshot(collection(db, "posts"), callback); // hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.
    
    return queryDb;
};

// **** lOGOUT USER ****
export const logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        // console.log('logout');
        window.location.hash = '#/login';
    })
        .catch((error) => {
            // An error happened.
        });
};

// **** DELETE POST ****
export const deletePost = id => deleteDoc(doc(db, "posts", id));  // buscar en posts y eliminar el id
// console.log('delete', deletePost);
