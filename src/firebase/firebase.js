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

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // reffing the location of data
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // getting the data
  const snapShot = await userRef.get();

  // if the user doesnt exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user: ", error);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
