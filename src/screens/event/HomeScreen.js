import React from "react";
import { EventList } from "../../components/eventList";
import { useSelector } from "react-redux";

export const HomeScreen = () => {
	const { loggedIn } = useSelector((state) => state.users);
	const { events, registeredEvents, interestedEvents } = useSelector(
		(state) => state.events
	);
	console.log(events, registeredEvents, interestedEvents);
	return (
		<div className="h-full">
			{loggedIn && (
				<EventList
					title={"Interested Events"}
					to="/"
					events={interestedEvents}
					type="h"
				/>
			)}
			{loggedIn && (
				<EventList
					title={"Registered Events"}
					to="/"
					events={registeredEvents}
					type="h"
				/>
			)}
			<EventList title={"All Events"} to="/" events={events} />
		</div>
	);
};
