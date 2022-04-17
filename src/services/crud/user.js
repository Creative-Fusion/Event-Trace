import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
	query,
	where,
} from "firebase/firestore";
import { updateCurrentUser } from "../../redux/actions/userActions";
import { db } from "../firebase";

const usersCollectionRef = collection(db, "users");

export const readUsers = async (user, dispatch) => {
	const data = await getDocs(usersCollectionRef);
	return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const queryUser = async (email) => {
	let user = null;
	const users = await getDocs(
		query(usersCollectionRef, where("email", "==", email))
	);
	users.forEach((doc) => {
		user = { ...doc.data(), id: doc.id };
	});
	return user;
};

export const createUser = async (user) => {
	await addDoc(usersCollectionRef, user);
	const newUser = await queryUser(user.email);
	return newUser;
};

export const updateUser = async (data, id, dispatch) => {
	const document = doc(db, "users", id);
	await updateDoc(document, data);
	const updatedUser = queryUser(data.email);
	dispatch(updateCurrentUser(updatedUser));
};
