import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXvDCPOeEnXcZ3R1GnEES7lLkVSUGfdRM",
  authDomain: "lofty-class4.firebaseapp.com",
  projectId: "lofty-class4",
  storageBucket: "lofty-class4.appspot.com",
  messagingSenderId: "1052886874300",
  appId: "1:1052886874300:web:621fe7dd93e41191cf78b9"
});
