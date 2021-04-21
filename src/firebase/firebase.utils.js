import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxrHUeI_G_YiIPKnL5rNzhfvGF4DHlvvI",
    authDomain: "crown-db-9796b.firebaseapp.com",
    projectId: "crown-db-9796b",
    storageBucket: "crown-db-9796b.appspot.com",
    messagingSenderId: "576326008188",
    appId: "1:576326008188:web:fc3ed14e6b5d6eba25f8f9",
    measurementId: "G-RF1VEZYJFQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;