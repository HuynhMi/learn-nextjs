import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBtxiUx4jCIyjnZ4z-F9LKc9CyYtgJksjc',
	authDomain: 'blog-app-nextjs-ba5ef.firebaseapp.com',
	projectId: 'blog-app-nextjs-ba5ef',
	storageBucket: 'blog-app-nextjs-ba5ef.appspot.com',
	messagingSenderId: '112003077375',
	appId: '1:112003077375:web:ff94b83f59b41b7a9fa8ca',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
