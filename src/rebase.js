import Rebase from 're-base';
import firebase from 'firebase';

const firebaseAAIzaSyBQwIpSTpbImpfhdk2I1tNBdeTEg-iEDewpp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mintbean-kanban.firebaseapp.com",
    databaseURL: "https://mintbean-kanban.firebaseio.com",
    // projectId: "mintbean-kanban",
    // storageBucket: "mintbean-kanban.appspot.com",
    // messagingSenderId: "1033357336122",
    // appId: "1:1033357336122:web:98d87bee30b78d266adf03"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;