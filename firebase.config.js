// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey:"AIzaSyDdu7VXq66W9yl8AX7EBcd98UWt2x6H4_w",
  authDomain:"assignment11-41509.firebaseapp.com",
  projectId:"assignment11-41509",
  storageBucket:"assignment11-41509.appspot.com",
  messagingSenderId:"93913962820",
  appId:"1:93913962820:web:a55fe4b8231ab384ef1f11"
 };
// console.log(import.meta.env.AU_apiKey, 'apiKey');
// const firebaseConfig = {
  // apiKey: import.meta.env.AU_apiKey,
  // authDomain: import.meta.env.AU_authDomain,
  // projectId: import.meta.env.AU_projectId,
  // storageBucket: import.meta.env.AU_storageBucket,
  // messagingSenderId: import.meta.env.AU_messagingSenderId,
  // appId: import.meta.env.AU_appId
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;