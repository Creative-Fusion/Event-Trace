import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../features/eventsSlice";
export const store = configureStore({
	reducer: {
		events: eventReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
