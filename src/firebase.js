import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB8ej_aBxbtAuNRnC5K8pCHIA92TLEe7Js",
    authDomain: "assignment2-96ef6.firebaseapp.com",
    projectId: "assignment2-96ef6",
    storageBucket: "assignment2-96ef6.appspot.com",
    messagingSenderId: "442119391979",
    appId: "1:442119391979:web:c83a27278b0b6b31af4cae"
  };



  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
 export  const auth = getAuth(app);
 