import React from "react";
import { fakeEventList } from "../../data/fakeDB";
import { EventList } from "../../components/eventList";
import { useSelector } from "react-redux";

export const HomeScreen = () => {
	const { loggedIn } = useSelector((state) => state.users);
	const allEvents = fakeEventList;
	const interestedEvents = fakeEventList.slice(4, 10);
	const registeredEvents = fakeEventList.slice(1, 5);
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
			<EventList title={"All Events"} to="/" events={allEvents} />
		</div>
	);
};
