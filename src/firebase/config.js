// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo7KkQF2_0Q9oMkqQubmE85dTtyG6pd9g",
  authDomain: "react-cursos-c463e.firebaseapp.com",
  projectId: "react-cursos-c463e",
  storageBucket: "react-cursos-c463e.appspot.com",
  messagingSenderId: "742954574416",
  appId: "1:742954574416:web:c020ec8eb802051cf22755"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
