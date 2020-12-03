import firebase from'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyDZBhIcsRUlpkxeA1gJnd3JHQOurwbbdmM",
    authDomain: "crwn-db-c4bbc.firebaseapp.com",
    databaseURL: "https://crwn-db-c4bbc.firebaseio.com",
    projectId: "crwn-db-c4bbc",
    storageBucket: "crwn-db-c4bbc.appspot.com",
    messagingSenderId: "1081698757729",
    appId: "1:1081698757729:web:a386bafe6f17616fbe4e20",
    measurementId: "G-1DNS1ES0QR"
  };
  firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth,additionalData) => {

  if(!userAuth) return;

  const userRef =firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();


  if(!snapShot.exists){
    const { displayName,email} = userAuth;
    const  createdAt =new Date();
    try{
      await userRef.set({
     displayName,
     email,
     createdAt,
     ...additionalData

      });


    }
    catch (error) {
console.log('error creating user', error.message)

    }

  }
  return userRef;


  
};
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;