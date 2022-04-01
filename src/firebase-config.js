import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB839vJfL7fKks3j1lMzk6GJzW4Ar0UsDo",
  authDomain: "sommers-app-e9cf0.firebaseapp.com",
  databaseURL: "https://sommers-app-e9cf0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sommers-app-e9cf0",
  storageBucket: "sommers-app-e9cf0.appspot.com",
  messagingSenderId: "872392339990",
  appId: "1:872392339990:web:4933e20589a8d099607b37",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const usersRef = collection(db, "users");
export const postsRef = collection(db, "posts");
