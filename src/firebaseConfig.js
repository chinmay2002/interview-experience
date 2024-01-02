// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCgR0gH5x1jW2VsWVFpOtXSOx3Y-CCsHA0",
    authDomain: "interview-experience-e07c4.firebaseapp.com",
    projectId: "interview-experience-e07c4",
    storageBucket: "interview-experience-e07c4.appspot.com",
    messagingSenderId: "859830430791",
    appId: "1:859830430791:web:f66aba9c28a502047f5562",
    measurementId: "G-L7K3J9GM81"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { app, analytics, db };
