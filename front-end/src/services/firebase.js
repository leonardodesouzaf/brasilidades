import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXEG-TYtXsTVcviOAZFkm-uZ2-uJOHRjQ',
  authDomain: 'brasilidades-3ada6.firebaseapp.com',
  projectId: 'brasilidades-3ada6',
  storageBucket: 'brasilidades-3ada6.appspot.com',
  messagingSenderId: '456322857228',
  appId: '1:456322857228:web:0cf69c2e5f264c67a23129',
  measurementId: 'G-C3CZ1ZD7N9'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
