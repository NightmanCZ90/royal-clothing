import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAd5KqtSou3hkb5ewOobLX9Y-WETEc1paA",
  authDomain: "royal-db-6e6d4.firebaseapp.com",
  projectId: "royal-db-6e6d4",
  storageBucket: "royal-db-6e6d4.appspot.com",
  messagingSenderId: "99762054446",
  appId: "1:99762054446:web:1adacaca3e8d40520846bf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;