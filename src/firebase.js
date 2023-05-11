
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA4vk6965M7AtcPqJa1rw6HRoRh-mHwhZ8",
    authDomain: "my-react-portfolio-1b310.firebaseapp.com",
    projectId: "my-react-portfolio-1b310",
    storageBucket: "my-react-portfolio-1b310.appspot.com",
    messagingSenderId: "597009220742",
    appId: "1:597009220742:web:589dfa31ff8eb2c59a7d07",
    measurementId: "G-0YBPS8WSMM"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);