import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCA5IPZX_gesUscNxgFvFb2I-y1nH3gY0M",
  authDomain: "project-management-react-5d698.firebaseapp.com",
  databaseURL: "https://project-management-react-5d698.firebaseio.com",
  projectId: "project-management-react-5d698",
  storageBucket: "project-management-react-5d698.appspot.com",
  messagingSenderId: "5932012500",
  appId: "1:5932012500:web:8ee8f289657ea4898c7c41"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export { db, auth, storage };