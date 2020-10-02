import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJqYUpqXvB6Wai4vNfMyRxA_YmNbVeri8",
  authDomain: "chatrrbox.firebaseapp.com",
  databaseURL: "https://chatrrbox.firebaseio.com",
  projectId: "chatrrbox",
  storageBucket: "chatrrbox.appspot.com",
  messagingSenderId: "620217673278",
  appId: "1:620217673278:web:db102466b06e0d8bed536f",
  measurementId: "G-B22D87N0TB",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
