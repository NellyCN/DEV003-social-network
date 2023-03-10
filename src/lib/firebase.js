import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { collection, addDoc, getDoc, query, onSnapshot, orderBy, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import { auth, db } from './configfirebase'; 

// **** CREA UN USUARIO NUEVO CON EMAIL Y PASSWORD ****

export const createUserEmail = (userName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user; // Una vez existe el usuario, puedo actualizar su información
            updateProfile(auth.currentUser, {
                displayName: userName
            });
            console.log('usuario', user);
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

// crear funcion nombre usuario
// export const userNameWall = auth.currentUser.displayName;

// **** CREAR POST EN FIRESTORE DESDE EL TEMPLATE ****

export const createPost = async ( user, comment) => {
    console.log(auth.currentUser.displayName);
    // Add a new document with a generated id.
    const documentReference = await addDoc(collection(db, "posts"), {
        // userID: auth.currentUser.uid,
        // email,
        user: auth.currentUser.displayName ? auth.currentUser.displayName : user,
        date: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
        comment,
    });
    console.log("Document written with ID: ", documentReference.id);
};

// **** TRAE LOS POSTS DE FIRESTORE ****

export const getPosts = async () => onSnapshot(query(collection(db, 'posts'), orderBy('date')), callback);

// **** TRAE LOS POST DE FIRESTORE Y LOS MUESTRA EN TIEMPO REAL ****

export const getPostsOnSnapShot = async (callback) => {  // se asegura de que la función devuelva una promesa
    const queryDb = await onSnapshot(collection(db, 'posts'), callback); // hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.
    
    return queryDb;
};

// **** OBTENER POST DE FIRESTORE ****

export const getPost = id => getDoc(doc(db,'posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db,'posts', id), newFields);

// **** DELETE POST ****

export const deletePost = id => deleteDoc(doc(db, "posts", id));  // buscar en posts y eliminar el id
// console.log('delete', deletePost);


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
}
