// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVTx4jcPM7pM0ma02wROSD-K7fWh_pTVc",
    authDomain: "netflixgpt-c9258.firebaseapp.com",
    projectId: "netflixgpt-c9258",
    storageBucket: "netflixgpt-c9258.appspot.com",
    messagingSenderId: "967721439046",
    appId: "1:967721439046:web:d963eed5cca448d4b55f47",
    measurementId: "G-XQG8GET48Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);