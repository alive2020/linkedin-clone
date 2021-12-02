import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCZVpDqLPO1RuwhY6KXZUaQ6YrDUS-AzAc',
  authDomain: 'linkedin-clone-eb275.firebaseapp.com',
  projectId: 'linkedin-clone-eb275',
  storageBucket: 'linkedin-clone-eb275.appspot.com',
  messagingSenderId: '212254726320',
  appId: '1:212254726320:web:43549fe425622bfeeac375',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const db = getFirestore(app);

const auth = firebase.auth();
// const auth = getAuth();

export { db, auth };
