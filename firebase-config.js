import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyD_SOn5ibc6KhHgnKX0QEenor0498tumsk",
    authDomain: "proconnect-b57ab.firebaseapp.com",
    projectId: "proconnect-b57ab",
    storageBucket: "proconnect-b57ab.firebasestorage.app",
    messagingSenderId: "237458339973",
    appId: "1:237458339973:web:b2e24a3de86fdd9f0b91ec"
};

// Inicializando Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);