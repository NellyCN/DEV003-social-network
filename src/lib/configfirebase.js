// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCHGZKwcWg9_XD0N9ZihV7X5WdsSacxlS4',
  authDomain: 'travellx-6002b.firebaseapp.com',
  projectId: 'travellx-6002b',
  storageBucket: 'travellx-6002b.appspot.com',
  messagingSenderId: "312558156617",
  appId: '1:312558156617:web:6aa5e8c6baca86c7147898',
  measurementId: 'G-8R7R4ND7HK',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // constante que usaré para autenticar usuarios
export const db = getFirestore(app); // para que ejecute getfirestore
