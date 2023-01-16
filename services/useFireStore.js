import { db } from '@/firebaseConfig';
import { doc, collection, getDoc, getDocs } from 'firebase/firestore';

export const getData = async (col) => {
	const ref = collection(db, col);
	const docSnap = await getDocs(ref);
	let docs = [];
	docSnap.forEach((doc) => {
		const item = { ...doc.data(), id: doc.id };
		docs.push(item);
	});
	return docs;
};

export const getDataById = async (id, col) => {
	const docRef = doc(db, col, id);
	const docSnap = await getDoc(docRef);
	const result = docSnap.data();
	return result;
};

export const getIds = async (col) => {
	const ref = collection(db, col);
	const docSnap = await getDocs(ref);
	let ids = [];
	docSnap.forEach((doc) => {
		const item = { id: doc.id };
		ids.push(item);
	});
	return ids;
};
