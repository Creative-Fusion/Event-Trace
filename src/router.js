import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/home";
import { CreateEvent } from "./screens/event/CreateEvent";
import { EventDescription } from "./screens/event/eventDescription/EventDescription";
import { OrganizerDescription } from "./screens/Organizer/Organizerdash";
import { HomeScreen } from "./screens/event/HomeScreen";

export const EventTraceRouter = () => {
	return (
		<Routes>
			{/* INDEX */}
			<Route path="/" element={<Home />} />

			{/* USER */}
			<Route path="u/home" element={<HomeScreen />} />

			{/* EVENTS */}
			<Route path="events" element={<Home />} />
			<Route path="events/create" element={<CreateEvent />} />
			<Route path="events/:eventId" element={<EventDescription />} />

			{/* ORGANIZER */}
			<Route path="organizer/:id" element={<OrganizerDescription />} />
		</Routes>
	);
};
