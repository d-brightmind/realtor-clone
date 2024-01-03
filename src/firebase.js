// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-vv_UyoPAhcBIQChap0dRUFx_GZskDso",
  authDomain: "realtor-clone-15bcf.firebaseapp.com",
  projectId: "realtor-clone-15bcf",
  storageBucket: "realtor-clone-15bcf.appspot.com",
  messagingSenderId: "986637847639",
  appId: "1:986637847639:web:5bf1f328cb3079dd8fa712"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();