import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config=  {
    apiKey: "AIzaSyDwJaTUCxnH84N0_u2ZN9uQwgVpNiEVbJ0",
    authDomain: "crwn-db-89b72.firebaseapp.com",
    databaseURL: "https://crwn-db-89b72.firebaseio.com",
    projectId: "crwn-db-89b72",
    storageBucket: "crwn-db-89b72.appspot.com",
    messagingSenderId: "389768188150",
    appId: "1:389768188150:web:fe3177dc9c6cfcfdf51cd7",
    measurementId: "G-HEG1DFD6BV"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore = firebase.firestore();

{/* below line : this provides access to GoogleAuthProvider class from auth library */}
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;