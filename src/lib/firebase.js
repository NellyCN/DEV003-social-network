// REGISTRAR NUEVOS USUARIOS
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs } from 'firebase/firestore';
// import { setupPosts } from '../views/muro';
import { auth, db } from './configfirebase'; //db
import { collection, addDoc } from 'firebase/firestore';
import { query, onSnapshot } from "firebase/firestore";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

// CREA UN USUARIO NUEVO CON EMAIL Y PASSWORD
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

// LOGUEO CON EMAIL Y PASSWORD
export const signInUserEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// CREAR POST EN FIRESTORE DESDE EL TEMPLATE
export const createPost = async (comment) => {
    // Add a new document with a generated id.
    const documentReference = await addDoc(collection(db, "posts"), {
        comment
    });
    console.log("Document written with ID: ", documentReference.id);
};

// TRAE LOS POST DE FIRESTORE
export const getPosts = async () => {  // se asegura de que la función devuelva una promesa
    // Add a new document with a generated id.
    const documentsReference = await getDocs(collection(db, "posts")); // hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.

    console.log("Documents ", documentsReference);
    return documentsReference.docs;
};

export const getPostsSnapShot = async () => {  // se asegura de que la función devuelva una promesa
    // Add a new document with a generated id.
    const queryDb = query(collection(db, "posts")); // hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.
    

    const unsubscribe = onSnapshot(queryDb, (querySnapshot) => {
        console.log(querySnapshot);

        const posts = [];
        querySnapshot.forEach((post) => {
            const itemPost = {
             comentario: comment,
             user: 'nelly'
            }

            posts.push(itemPost);

            posts.push(post.data().comment);
            // console.log(post.data().comment);
        });
    })
    
    return queryDb.posts;
};


// //
// export const getPosts = async ()  => {  // se asegura de que la función devuelva una promesa
// 	// Add a new document with a generated id.
// 		const documentsReference = query(collection(db, "posts")); // hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.
// 		const unsubscribe = onSnapshot(documentsReference, (querySnapshot) => {
// 			const posts = [];
// 			querySnapshot.forEach()
// 		})
// 		console.log("Documents ", documentsReference);
// 	  	return documentsReference.docs;
// };

// AGREGAR POST CREADO DE FIRESTORE AL MURO EN TIEMPO REAL
// const addNewPostInWall =
// const q = query(collection(db, "cities"), where("state", "==", "CA"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
// 	const cities = [];
// 	querySnapshot.forEach((doc) => {
// 		cities.push(doc.data().name);
// 	});
// 	console.log("Current cities in CA: ", cities.join(", "));
// });


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
