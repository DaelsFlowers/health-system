// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpm2i1oRfNqYlRNp-PgS70wHCf1IVUras",
    authDomain: "health-systems.firebaseapp.com",
    projectId: "health-systems",
    storageBucket: "health-systems.appspot.com",
    messagingSenderId: "651370667862",
    appId: "1:651370667862:web:0e7e428e716eda4c5a40f7"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

