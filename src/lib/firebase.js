// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace this with YOUR actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCtahjLjjOl61mJzCgf_2p0sNcS8kT-GO0",
    authDomain: "luna-portfolio-248a5.firebaseapp.com",
    projectId: "luna-portfolio-248a5",
    storageBucket: "luna-portfolio-248a5.firebasestorage.app",
    messagingSenderId: "192164670810",
    appId: "1:192164670810:web:096af3e4c913872b8dd763",
    measurementId: "G-QL8N358GME"
};

// Initialize Firebase
let app;
let db;

// Only initialize if we're in the browser
if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };
export default app;