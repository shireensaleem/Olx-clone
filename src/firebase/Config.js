import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDJlKKP0IHxr5VA6gjFAAyuVzNhe2U1h6U",
    authDomain: "olx-clone-30c4f.firebaseapp.com",
    projectId: "olx-clone-30c4f",
    storageBucket: "olx-clone-30c4f.appspot.com",
    messagingSenderId: "9543639298",
    appId: "1:9543639298:web:15f7e2311d1fa02df5e21b",
    measurementId: "G-H55VMEMX2G"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore(app);

// const auth = firebase.auth();
const auth = getAuth();

   
 export { db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };