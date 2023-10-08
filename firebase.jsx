// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhwDPVGrZEmaKU0w5rcPgXGlysGOnHCoM",
  authDomain: "tdl-react.firebaseapp.com",
  projectId: "tdl-react",
  storageBucket: "tdl-react.appspot.com",
  messagingSenderId: "60750449342",
  appId: "1:60750449342:web:eb933628820c9d05eb2cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db