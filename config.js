import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyAT_ON_7mkDdTglly-AGTcjG2fEoN3Hil0",
          authDomain: "projeto-90577.firebaseapp.com",
          databaseURL: "https://projeto-90577-default-rtdb.firebaseio.com",
          projectId: "projeto-90577",
          storageBucket: "projeto-90577.appspot.com",
          messagingSenderId: "959019717244",
          appId: "1:959019717244:web:dfd00aa4e9cc27a08eaff9"
        };
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();