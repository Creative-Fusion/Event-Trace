import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	eventsList: [],
};

const eventSlice = createSlice({
	name: "events",
	initialState,
	reducers: {
		createEvent: (state, action) => {
			state.eventsList.push(action.payload);
			console.log(state.eventsList[0]);
		},
	},
});

export const { createEvent } = eventSlice.actions;
export const getEvents = (state) => state.events.eventsList;
export default eventSlice.reducer;
