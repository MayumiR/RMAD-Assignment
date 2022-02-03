import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWRirvjvnZ_dDhiUOvM2UJtjyWRcXDRqU",
    authDomain: "assignment1-noteapp.firebaseapp.com",
    projectId: "assignment1-noteapp",
    storageBucket: "assignment1-noteapp.appspot.com",
    messagingSenderId: "8692558584",
    appId: "1:8692558584:web:85335b5114e8589a32e90d",
    measurementId: "G-RPX17R3Y0V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);