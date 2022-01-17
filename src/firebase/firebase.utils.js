import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyC8qfrKe6MXhHG-3c4k2BUK8lwZnbLWR_M",
  authDomain: "crown-store-3175c.firebaseapp.com",
  projectId: "crown-store-3175c",
  storageBucket: "crown-store-3175c.appspot.com",
  messagingSenderId: "623600632254",
  appId: "1:623600632254:web:5280370c99899675e5f9ef",
  measurementId: "G-S6QG2E33Z5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email}  = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
