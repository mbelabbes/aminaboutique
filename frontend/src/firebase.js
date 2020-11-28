import * as firebase from "firebase";
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDq70uvMOAstXc80iQ3jSQEp8BmnftLjn8",
    authDomain: "aminaboutique-4acf4.firebaseapp.com",
    databaseURL: "https://aminaboutique-4acf4.firebaseio.com",
    projectId: "aminaboutique-4acf4",
    storageBucket: "aminaboutique-4acf4.appspot.com",
    messagingSenderId: "36588572491",
    appId: "1:36588572491:web:f6b0329dab7aa265bca2ce",
    measurementId: "G-QJ4ZMLWEVY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
