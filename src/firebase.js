import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUAmGeEV_TLFnMj9krABww73RxZPLHeik",
    authDomain: "discord-clone-8a4aa.firebaseapp.com",
    projectId: "discord-clone-8a4aa",
    storageBucket: "discord-clone-8a4aa.appspot.com",
    messagingSenderId: "808031026369",
    appId: "1:808031026369:web:ada4f2811fdc6363bde840",
    measurementId: "G-XQ1YSWDCJN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;
