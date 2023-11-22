import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-LuCtZdIufI-F57paA3Jj-DFziAnI5xU",
  authDomain: "e-ride-f5dc6.firebaseapp.com",
  projectId: "e-ride-f5dc6",
  storageBucket: "e-ride-f5dc6.appspot.com",
  messagingSenderId: "345593222368",
  appId: "1:345593222368:web:d4e15d226155f2be35ac85",
  measurementId: "G-CJRBR4BR78"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
