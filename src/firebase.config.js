// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLMFswOaDVYOJbi91FMirZ3UpkU0lSkGA",
  authDomain: "online-job-portal-aff22.firebaseapp.com",
  projectId: "online-job-portal-aff22",
  storageBucket: "online-job-portal-aff22.appspot.com",
  messagingSenderId: "835019965048",
  appId: "1:835019965048:web:b5ef8867a6334b2eb8638d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};