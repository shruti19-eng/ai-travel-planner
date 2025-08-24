// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv21Bdn3j3adLTj9Z70l3hWguvQwrQaNk",
  authDomain: "ai-travel-planner-cd484.firebaseapp.com",
  projectId: "ai-travel-planner-cd484",
  storageBucket: "ai-travel-planner-cd484.firebasestorage.app",
  messagingSenderId: "833995901461",
  appId: "1:833995901461:web:8a89703fbebdc5490e9c1c",
  measurementId: "G-8BXN10TD5H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);