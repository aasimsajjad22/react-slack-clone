import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAWrjajdcPxuWaFt7usWKGuszlir34fP2w",
  authDomain: "react-slack-clone-29185.firebaseapp.com",
  databaseURL: "https://react-slack-clone-29185.firebaseio.com",
  projectId: "react-slack-clone-29185",
  storageBucket: "react-slack-clone-29185.appspot.com",
  messagingSenderId: "531434478813",
  appId: "1:531434478813:web:378c42a804fd89ade60f34"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
