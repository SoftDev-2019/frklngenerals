import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDANqAjU62W_7UDsXmL0E9L1DDCztTHZlU",
  authDomain: "franklingeneralsdb.firebaseapp.com",
  databaseURL: "https://franklingeneralsdb.firebaseio.com",
  projectId: "franklingeneralsdb",
  storageBucket: "franklingeneralsdb.appspot.com",
  messagingSenderId: "759152351234",
  appId: "1:759152351234:web:4827203ec15f08b5afaf1b",
  measurementId: "G-EY9HV6GCWX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;