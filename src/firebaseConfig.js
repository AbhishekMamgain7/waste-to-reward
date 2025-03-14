// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqj7v_Jle8s5yTRfIpfy8KqcCOC6hrAoE",
  authDomain: "graph-e-thon.firebaseapp.com",
  projectId: "graph-e-thon",
  storageBucket: "graph-e-thon.firebasestorage.app",
  messagingSenderId: "973850441225",
  appId: "1:973850441225:web:76613b4922aab80021aad8",
  measurementId: "G-C0TQLCD226",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
