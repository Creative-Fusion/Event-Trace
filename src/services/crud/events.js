import { message } from "antd";
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
	arrayUnion,
	query,
	where,
} from "firebase/firestore";
import {
	allEvents,
	createEvent as create,
} from "../../redux/actions/eventActions";
import { db } from "../firebase";

const eventsCollectionRef = collection(db, "events");

export const readEvents = async (dispatch) => {
	const data = await getDocs(eventsCollectionRef);
	const events = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	dispatch(allEvents(events));
	return events;
};
export const readEventByName = async (name) => {
	let event = null;
	const events = await getDocs(
		query(eventsCollectionRef, where("name", "==", name))
	);
	events.forEach((doc) => {
		event = { ...doc.data(), id: doc.id };
	});
	return event;
};

export const createEvent = async (event, dispatch) => {
	try {
		const existingEvent = await readEventByName(event.name);
		console.log(existingEvent);
		if (existingEvent) {
			throw Error(`Event with name ${event.name} already exists`);
		}
		const userRef = doc(db, "users", event.creator.id);
		const createdEvent = await addDoc(eventsCollectionRef, event);
		await updateDoc(userRef, { createdEvents: arrayUnion(createdEvent.id) });
		dispatch(create({ ...event, id: createdEvent.id }));
	} catch (e) {
		console.log(e);
		message.error(e);
	}
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
