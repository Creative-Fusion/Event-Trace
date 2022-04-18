import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
} from "firebase/firestore";
import { allEvents } from "../../redux/actions/eventActions";
import { db } from "../firebase";

const eventsCollectionRef = collection(db, "events");

export const readEvents = async (dispatch) => {
	const data = await getDocs(eventsCollectionRef);
	const events = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	dispatch(allEvents(events));
	return events;
};

export const createEvent = async (event, dispatch) => {
	await addDoc(eventsCollectionRef, event);
	console.log("Added");
};

export const updateEvent = async (data, id, dispatch) => {
	const document = doc(db, "events", id);
	await updateDoc(document, data);
	console.log("Updated");
};

export const deleteEvent = async (id, dispatch) => {
	const eventDoc = doc(db, "events", id);
	await deleteDoc(eventDoc);
};
