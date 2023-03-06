// REGISTRAR NUEVOS USUARIOS
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, addDoc, query, getDocs, onSnapshot, deleteDoc } from 'firebase/firestore';
// import { setupPosts } from '../views/muro';
import { auth, db } from './configfirebase'; //db
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"


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

export const createPost = async ( user, comment) => {
    // Add a new document with a generated id.
    const documentReference = await addDoc(collection(db, "posts"), {
        user, date: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(), comment,
    });
    console.log("Document written with ID: ", documentReference.id);
};


// **** TRAE LOS POST DE FIRESTORE ****

export const getPosts = async () => {  // se asegura de que la función devuelva una promesa
    // Add a new document with a generated id.
    const documentsReference = await getDocs(collection(db, "posts")); // hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.

    console.log("Documents ", documentsReference);
    return documentsReference.docs;
};

// **** TRAE LOS POST DE FIRESTORE Y LOS MUESTRA EN TIEMPO REAL ****

export const getPostsSnapShot = async () => {  // se asegura de que la función devuelva una promesa
    // Add a new document with a generated id.
    const queryDb = query(collection(db, "posts")); // hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.
    console.log('queryDb')
    const unsubscribe = onSnapshot(queryDb, (querySnapshot) => {
        console.log('querySnapshot', querySnapshot.docs); // Muestra las props de querysnapshot, una de ellas es "docs", del que muestra sus elementos como objeto

        const posts = [];   
        querySnapshot.forEach((post) => {
            //console.log('post', post) // Muestra los posts creados de Firestore(Objetos) con todas sus props
            // console.log('post', post.data()) // El Método data(),Transforma el Objeto de Firestore a Objeto de JS
            // const itemsPosts=post.data();
            // console.log('items', itemsPosts);   //Muestra los posts con sus propiedades user y comment

            // itemsPosts = {
            //     user, date, comment,
            // }

            // posts.push(post.data());

            // posts.push(post.data().comment);
            // console.log(post.data().comment);
        });
    });

    return queryDb.posts;
};

// // Si estamos autenticados al inicio de sesion
// onAuthStateChanged (auth, async (user) => { // Es asíncrono porque se está consultando una BD
// 		if (user) {  // Si el usuario existe, significa q esta logueado
// 				// Traer todos los datos que tengas hasta ese momento.
// 				const querySnapshot = await getDocs (collection (db, 'posts'));
// 				setupPosts (querySnapshot.docs); // muestra los datos en la interfaz
// 		} else {
// 				alert('Usuario no está logueado');
// 			}
// });

// **** lOGOUT USER **** OK
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

export const deletePost = () => deleteDoc(post(db, "posts"));
console.log('delete', deletePost);