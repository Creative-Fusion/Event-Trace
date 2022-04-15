import { ActionTypes } from "../constants/actionTypes";

const initialState = {
	loggedIn: false,
	currentUser: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.USER.SET_LOGIN:
			state.loggedIn = true;
			state.currentUser = payload;
			return state;
		case ActionTypes.USER.LOGOUT:
			state.loggedIn = false;
			state.currentUser = null;
			return state;
		default:
			return state;
	}
};
