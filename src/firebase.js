import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCZVpDqLPO1RuwhY6KXZUaQ6YrDUS-AzAc',
  authDomain: 'linkedin-clone-eb275.firebaseapp.com',
  projectId: 'linkedin-clone-eb275',
  storageBucket: 'linkedin-clone-eb275.appspot.com',
  messagingSenderId: '212254726320',
  appId: '1:212254726320:web:43549fe425622bfeeac375',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
