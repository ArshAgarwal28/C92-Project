import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyADDL2Hs8kxH-wO1VdeuDENcgXelLY1X2Y',
	authDomain: 'c38-project-557ba.firebaseapp.com',
	databaseURL: 'https://c38-project-557ba.firebaseio.com',
	projectId: 'c38-project-557ba',
	storageBucket: 'c38-project-557ba.appspot.com',
	messagingSenderId: '846504305766',
	appId: '1:846504305766:web:f349fcb8bf567f2bed39a7',
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
