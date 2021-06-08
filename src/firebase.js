import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCPSg9jI1VzrI2HDS9HGD2Q30y99dYFhNo",
    authDomain: "linkedln-clone-38c41.firebaseapp.com",
    projectId: "linkedln-clone-38c41",
    storageBucket: "linkedln-clone-38c41.appspot.com",
    messagingSenderId: "866907310668",
    appId: "1:866907310668:web:f9f1aa33d1eac2226142e9"
  };


  const firebaseApp= firebase.initializeApp(firebaseConfig);


  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth} ;
  