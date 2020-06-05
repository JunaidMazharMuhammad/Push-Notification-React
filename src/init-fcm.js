import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
  messagingSenderId: "124692336438",
  apiKey: "AIzaSyCJozUXecZEPsRxE0tNEFAanH6_GwUup4E",
  authDomain: "helloworld-c1eb7.firebaseapp.com",
  databaseURL: "https://helloworld-c1eb7.firebaseio.com",
  projectId: "helloworld-c1eb7",
  storageBucket: "helloworld-c1eb7.appspot.com",
  appId: "1:124692336438:web:683fbc0edf8e8ab4832d97",
  measurementId: "G-BM1G5BH5Z2"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BJYVBpXIrLcJNJwNeXGEZGOazb9DSFaVLXNHPxdy6fmeZf2Xyyp4CtosmKbW5iOVmDay_4_DlTWxrjRy6Blm8J0"
);
export { messaging };