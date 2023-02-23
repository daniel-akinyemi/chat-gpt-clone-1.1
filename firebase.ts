// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsyG5Jy4cgr8l-s8RckPUliiM1BwzOVk4",
  authDomain: "chatgpt-messenger-clone-a58c3.firebaseapp.com",
  projectId: "chatgpt-messenger-clone-a58c3",
  storageBucket: "chatgpt-messenger-clone-a58c3.appspot.com",
  messagingSenderId: "297465966153",
  appId: "1:297465966153:web:d77e92b5403146835a9998"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}