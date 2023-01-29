// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoG4eCb29O32yH5speksNTH2MOduc7p_E",
  authDomain: "spartahack8-f1243.firebaseapp.com",
  projectId: "spartahack8-f1243",
  storageBucket: "spartahack8-f1243.appspot.com",
  messagingSenderId: "664934073334",
  appId: "1:664934073334:web:719a49c89300b67f2d7dd7",
  measurementId: "G-4674KLPW9E",
  databaseURL: "https://spartahack8-f1243-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
