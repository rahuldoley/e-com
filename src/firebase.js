// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoZxt6ZpYifFWBFv-0ezbVp78tDtPQya8",
  authDomain: "challenge-62736.firebaseapp.com",
  databaseURL: "https://challenge-62736.firebaseio.com",
  projectId: "challenge-62736",
  storageBucket: "challenge-62736.appspot.com",
  messagingSenderId: "795312119223",
  appId: "1:795312119223:web:d1695f0dfd4ccb080a1c32",
  measurementId: "G-08CG3Q016W"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth };