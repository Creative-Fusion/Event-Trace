import { ActionTypes } from "../constants/actionTypes";

export const createEvent = (event) => {
	return {
		type: ActionTypes.CREATE_EVENT,
		payload: event,
	};
};

export const allEvents = (events) => {
	return {
		type: ActionTypes.ALL_EVENTS,
		payload: events,
	};
};
