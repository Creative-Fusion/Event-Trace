import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/home";
import { CreateEvent } from "./screens/event/CreateEvent";
import { EventDescription } from "./screens/event/eventDescription/EventDescription";
import { OrganizerDescription } from "./screens/Organizer/Organizerdash";
import { HomeScreen } from "./screens/event/HomeScreen";
import Userdashboard from "./screens/user/UserDashboard";
import { About } from "./screens/event/eventDescription/About";
import { Organizer } from "./screens/event/eventDescription/Organizer";
import { Participants } from "./screens/event/eventDescription/Participants";
import { Update } from "./screens/event/eventDescription/Update";

export const EventTraceRouter = () => {
	return (
		<Routes>
			{/* INDEX */}
			<Route path="/" element={<Home />} />

			{/* USER */}
			<Route path="u/home" element={<HomeScreen />} />
			<Route path="u/id" element={<Userdashboard />} />

			{/* EVENTS */}
			<Route path="e" element={<Home />} />
			<Route path="e/create" element={<CreateEvent />} />
			<Route path="e/:eventId" element={<EventDescription />}>
				<Route path="about" element={<About />} />
				<Route path="organizer" element={<Organizer />} />
				<Route path="participants" element={<Participants />} />
				<Route path="update" element={<Update />} />
			</Route>

			{/* ORGANIZER */}
			<Route path="o/:id" element={<OrganizerDescription />} />
		</Routes>
	);
};
