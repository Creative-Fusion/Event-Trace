import { ActionTypes } from "../constants/actionTypes";

const initialState = {
	events: [],
};

export const eventReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ALL_EVENTS:
			state.events = [...payload];
			return state;
		case ActionTypes.CREATE_EVENT:
			state.events.push(payload);
			return state;
		default:
			return state;
	}
};
