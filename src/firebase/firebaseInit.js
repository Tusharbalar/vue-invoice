import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAAzfVgl47vWEJRaJ3Cir-tlTDqBpcaS5Y",
  authDomain: "invoice-app-1660d.firebaseapp.com",
  projectId: "invoice-app-1660d",
  storageBucket: "invoice-app-1660d.appspot.com",
  messagingSenderId: "41599568490",
  appId: "1:41599568490:web:a4f5d01479f26fdc449813"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
