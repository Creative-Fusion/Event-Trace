import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	eventsList: [],
};

const eventSlice = createSlice({
	name: "events",
	initialState,
	reducers: {
		createEvent: (state, action) => {
			console.log(action.payload);
		},
	},
});

export const { createEvent } = eventSlice.actions;
export const getEvents = (state) => state.events.eventsList;
export default eventSlice.reducer;
