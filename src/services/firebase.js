// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBCltw0GVbXHA-rk28uLhcTXCgCj11pV-g",
	authDomain: "eventrace-43bd3.firebaseapp.com",
	projectId: "eventrace-43bd3",
	storageBucket: "eventrace-43bd3.appspot.com",
	messagingSenderId: "2374802518",
	appId: "1:2374802518:web:dcd7142acfd12bc6dbeff7",
	measurementId: "G-J4D37JLJJZ",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
export const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: "popup",
	// We will display Google and Facebook as auth providers.
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
	callbacks: {
		// Avoid redirects after sign-in.
		signInSuccessWithAuthResult: () => false,
	},
};
