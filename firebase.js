// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgFr3huttCUcQHje6V7YT_lmsNEp2f7IU",
    authDomain: "vrip-test.firebaseapp.com",
    projectId: "vrip-test",
    storageBucket: "vrip-test.appspot.com",
    messagingSenderId: "554747918299",
    appId: "1:554747918299:web:82ee00f20c0c3137f2d9fe",
    measurementId: "G-VLXP8JXEQ2"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}