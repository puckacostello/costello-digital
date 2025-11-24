import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHZ_N9pMzQQHhKWm9EefoW1Bc-ilV81i8",
  authDomain: "costello-digital.firebaseapp.com",
  projectId: "costello-digital",
  storageBucket: "costello-digital.firebasestorage.app",
  messagingSenderId: "167088873320",
  appId: "1:167088873320:web:89de89cdb4e264551ec0dd",
  measurementId: "G-LWJ7FTZ98J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

// Initialize Analytics (optional - only runs in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };