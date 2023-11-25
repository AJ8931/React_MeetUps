import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const FirebaseAuth = () => {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhGDlPn2ewELQDk1TZes7Xffka-JpPiK4",
  authDomain: "crash-react-94155.firebaseapp.com",
  databaseURL: "https://crash-react-94155-default-rtdb.firebaseio.com",
  projectId: "crash-react-94155",
  storageBucket: "crash-react-94155.appspot.com",
  messagingSenderId: "4923119709",
  appId: "1:4923119709:web:39d43547d816e8421ad5b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  return db;
}

export default FirebaseAuth