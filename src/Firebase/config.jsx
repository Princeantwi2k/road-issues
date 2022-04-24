import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFQy-faiJ9HM29VC7qhigZvKKuK2CVCmA",
  authDomain: "road-network-23031.firebaseapp.com",
  projectId: "road-network-23031",
  storageBucket: "road-network-23031.appspot.com",
  messagingSenderId: "443382409544",
  appId: "1:443382409544:web:0438775770ec58d0052b7d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
