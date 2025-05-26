// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDgY1CGVbCGcJSFGWkfYvcxKNvmHpJDC6I',
    authDomain: 'thoughtsblog-196fb.firebaseapp.com',
    projectId: 'thoughtsblog-196fb',
    storageBucket: 'thoughtsblog-196fb.firebasestorage.app',
    messagingSenderId: '935383647829',
    appId: '1:935383647829:web:619670f6121e25643cb6dc',
    measurementId: 'G-E3CTTHRQG1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
