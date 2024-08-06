// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEIji0z1apOZ6AMWrKCawyFnGqrDNlBPs",
  authDomain: "inventorymanagement-8f51b.firebaseapp.com",
  projectId: "inventorymanagement-8f51b",
  storageBucket: "inventorymanagement-8f51b.appspot.com",
  messagingSenderId: "452096574401",
  appId: "1:452096574401:web:65631c4994455c38b36540",
  measurementId: "G-0JL6M4S8GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}