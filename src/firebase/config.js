import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCizVQyWnKGS7DXnzQ59tq6cXdvRp2VzzA',
  authDomain: 'readinglistapp-5f84a.firebaseapp.com',
  projectId: 'readinglistapp-5f84a',
  storageBucket: 'readinglistapp-5f84a.appspot.com',
  messagingSenderId: '662620223520',
  appId: '1:662620223520:web:784defb83ca443db502445',
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
