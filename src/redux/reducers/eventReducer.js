import { ActionTypes } from "../constants/actionTypes";

const initialState = {
	events: [],
};

export const eventReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ALL_EVENTS:
			return state;
		default:
			return state;
	}
};
