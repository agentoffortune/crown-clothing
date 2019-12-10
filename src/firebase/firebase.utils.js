import firebase from "firebase/app";
import "firebase/firestore";
import"firebase/auth";

const config = {
    apiKey: "AIzaSyDTrBQseypzRH9dWyxe8j4kcyQFjlTl1CY",
    authDomain: "crownclothing-8ed8d.firebaseapp.com",
    databaseURL: "https://crownclothing-8ed8d.firebaseio.com",
    projectId: "crownclothing-8ed8d",
    storageBucket: "crownclothing-8ed8d.appspot.com",
    messagingSenderId: "86065281730",
    appId: "1:86065281730:web:580baf86c4534c6a7b595b",
    measurementId: "G-9H6D8NB5MP"
}
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error.message);

        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const firebaseAddCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore().collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore().batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth;
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth().signInWithPopup(provider);
export default firebase;