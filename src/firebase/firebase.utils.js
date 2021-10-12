import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD-mFemfSSBt2eZIwgZu52Vr-5qndwjVeY",
    authDomain: "crwn-db-a9afc.firebaseapp.com",
    projectId: "crwn-db-a9afc",
    storageBucket: "crwn-db-a9afc.appspot.com",
    messagingSenderId: "498046439619",
    appId: "1:498046439619:web:125d0fd4dcc655aa70d276",
    measurementId: "G-6ZEV38WC93"
  };

  export const createUserProfileDoucment = async (userAuth, additionalData) => {
       if(!userAuth) return;

       const userRef = firestore.doc(`users/${userAuth.uid}`);

       const snapShot = await userRef.get();

       if(!snapShot.exists) {
           const {displayName, email} = userAuth;
           const createdAt = new Date();
           try{
                 await userRef.set({
                      displayName, email, createdAt, ...additionalData
                 })

          } catch(error){
               console.log('error creating user', error.message);
           }

         }
    return userRef; 
  }; 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;