import { ActionTypes } from "../constants/actionTypes";

export const createEvent = (event) => {
	return {
		type: ActionTypes.ALL_EVENTS,
		payload: event,
	};
};

export const selectedEvent = (event) => {
	return {
		type: ActionTypes.SELECTED_EVENT,
		payload: event,
	};
};
