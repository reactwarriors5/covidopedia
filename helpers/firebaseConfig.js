import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const FirebaseConfig = {
 /*  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID */
  apiKey: "AIzaSyC2gAYg20BZqyZr5AvBMv8YyiSFfZ4UbLY",
  authDomain: "covidopedia.firebaseapp.com",
  projectId: "covidopedia",
  storageBucket: "covidopedia.appspot.com",
  messagingSenderId: "491071893739",
  appId: "1:491071893739:web:e5f0275299b2c2773a8eae"

}
// firebase.initializeApp(FirebaseConfig);

// firebase.initializeApp(firebaseConfig);
// export default Firebase;
// const firebaseApp = firebase.initializeApp(FirebaseConfig);
// !firebase.apps.length ? firebase.initializeApp(FirebaseConfig) : firebase.app()

firebase.initializeApp(FirebaseConfig);

// export default firebaseApp;
export default firebase;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;