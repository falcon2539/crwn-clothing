import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKUh5gYMIL-wk94raQRWfzr1ix3LobJvY",
    authDomain: "crwn-db-e6f78.firebaseapp.com",
    databaseURL: "https://crwn-db-e6f78.firebaseio.com",
    projectId: "crwn-db-e6f78",
    storageBucket: "crwn-db-e6f78.appspot.com",
    messagingSenderId: "444798398723",
    appId: "1:444798398723:web:4b06d8b61bb1385c4db936",
    measurementId: "G-YNVT7X1B2T"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;