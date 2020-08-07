import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC8IGhIMzHooAE0FzLPGvvYxDfrbPa2_dc",
    authDomain: "nvs-corner-ecom-react.firebaseapp.com",
    databaseURL: "https://nvs-corner-ecom-react.firebaseio.com",
    projectId: "nvs-corner-ecom-react",
    storageBucket: "nvs-corner-ecom-react.appspot.com",
    messagingSenderId: "414192297117",
    appId: "1:414192297117:web:78591cbfcca51caee1e074",
    measurementId: "G-YVXD896EH2"
  };


//Take User Logins and create new user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth; 
    const createdAt = new Date();

    //try-catch because it is a async request to store the data
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log('Error creating a user: '+err.message);
    }
  }

  return userRef;

}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //want to always trigger google pop up whenever Google Auth is used for authentication and Sign In
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
