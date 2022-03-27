import { ActionTypes } from "../constants/actionTypes";

export const createEvent = (event) => {
	return {
		type: ActionTypes.EVENT.CREATE_EVENT,
		payload: event,
	};
};

export const allEvents = (events) => {
	return {
		type: ActionTypes.EVENT.ALL_EVENTS,
		payload: events,
	};
};
