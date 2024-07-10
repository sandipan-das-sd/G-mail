
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyByV-rmO9qI6u7Jbcierp1BUEZXAOLtQ_U",
    authDomain: "clone-bb86c.firebaseapp.com",
    projectId: "clone-bb86c",
    storageBucket: "clone-bb86c.appspot.com",
    messagingSenderId: "130386228565",
    appId: "1:130386228565:web:4ffaf8d9a371cf6198abdc",
    measurementId: "G-5JLLMCQSY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app)
export const provider=new GoogleAuthProvider()