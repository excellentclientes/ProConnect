// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// SUAS CHAVES DO FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyD_SOn5ibc6KhHgnKX0QEenor0498tumsk",
    authDomain: "proconnect-b57ab.firebaseapp.com",
    projectId: "proconnect-b57ab",
    storageBucket: "proconnect-b57ab.firebasestorage.app",
    messagingSenderId: "237458339973",
    appId: "1:237458339973:web:b2e24a3de86fdd9f0b91ec"
};

// ==========================================
// CONFIGURAÇÃO DO GESTOR (SEU E-MAIL AQUI)
// ==========================================
const ADMIN_EMAIL = "excellentservices.excel@gmail.com"; // Substitua pelo seu e-mail do Google

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider, signInWithPopup, signOut, onAuthStateChanged, ADMIN_EMAIL };
