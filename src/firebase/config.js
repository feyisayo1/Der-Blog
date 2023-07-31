import { initializeApp } from "firebase/app";
// import firebase  from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD9Gy8tIyEFzHyj7yR-THyEcVtyjvpUMwc",
    authDomain: "vue-firebase-2714b.firebaseapp.com",
    projectId: "vue-firebase-2714b",
    storageBucket: "vue-firebase-2714b.appspot.com",
    messagingSenderId: "218282292685",
    appId: "1:218282292685:web:8729f2bc98a281c4e58084"
};

// init firebase
const app = initializeApp(firebaseConfig)
// const timestamp = firebase.firestore.FieldValue.serverTimestamp
const timestamp = serverTimestamp

// init firestore service
const projectFireStore = getFirestore(app);
 
export { projectFireStore, timestamp }

