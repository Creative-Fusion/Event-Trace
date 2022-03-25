import React from "react";
import { fakeEventList } from "../../data/fakeDB";
import { EventList } from "../../components/eventList";

export const HomeScreen = () => {
	const allEvents = fakeEventList;
	const interestedEvents = fakeEventList.slice(4, 10);
	const registeredEvents = fakeEventList.slice(1, 5);
	return (
		<div className="h-full">
			<EventList
				title={"Interested Events"}
				to="/"
				events={interestedEvents}
				type="h"
			/>
			<EventList
				title={"Registered Events"}
				to="/"
				events={registeredEvents}
				type="h"
			/>
			<EventList title={"All Events"} to="/" events={allEvents} />
		</div>
	);
};
