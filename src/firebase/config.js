import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDZr319vc0RqoSqfI69i8CohGBpIubhp1Y",
    authDomain: "ecommerce-entregafinal-242d9.firebaseapp.com",
    projectId: "ecommerce-entregafinal-242d9",
    storageBucket: "ecommerce-entregafinal-242d9.firebasestorage.app",
    messagingSenderId: "554191462749",
    appId: "1:554191462749:web:59817ebde43928b3ba08b4"
};

const app = initializeApp (firebaseConfig)
export const db = getFirestore(app) 