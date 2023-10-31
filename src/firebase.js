// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDocd5AYyJc9IOcR1h2wGBNHdm3xPg21kM",
//   authDomain: "workspace-otp.firebaseapp.com",
//   projectId: "workspace-otp",
//   storageBucket: "workspace-otp.appspot.com",
//   messagingSenderId: "893489137285",
//   appId: "1:893489137285:web:ed34a0e5ee55756f358bec",
//   measurementId: "G-YJES1HSPXN",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDocd5AYyJc9IOcR1h2wGBNHdm3xPg21kM",
  authDomain: "workspace-otp.firebaseapp.com",
  projectId: "workspace-otp",
  storageBucket: "workspace-otp.appspot.com",
  messagingSenderId: "893489137285",
  appId: "1:893489137285:web:ed34a0e5ee55756f358bec",
  measurementId: "G-YJES1HSPXN",
};

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
