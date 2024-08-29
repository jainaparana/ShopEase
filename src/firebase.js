import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWoN1x8mJzKZU09NUOjgN07iJuYKmXYzk",
  authDomain: "shopease-9866d.firebaseapp.com",
  projectId: "shopease-9866d",
  storageBucket: "shopease-9866d.appspot.com",
  messagingSenderId: "484243226746",
  appId: "1:484243226746:web:9a9d754c1b8ce0af78bbc3",
  measurementId: "G-4JPKZ813K2",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth using modular methods
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
