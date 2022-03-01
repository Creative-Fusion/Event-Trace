import React from "react";
import { EventCard } from "../../components/eventcard";
import { fakeEventList } from "../../data/fakeDB";

export const HomeScreen = () => {
	const interestedEvents = fakeEventList.slice(4, 10);
	const registeredEvents = fakeEventList.slice(1, 5);
	return (
		<div className="h-96 w-screen">
			{/* <div className="bg-gradient-to-b from-indigo-500 to-transparent h-96 w-screen"></div> */}

			<div className="flex flex-row  text-black font-bold pt-3 pl-32">
				Registered Events
			</div>
			<div className="flex flex-row-reverse  text-red-600 font-bold pr-32 ">
				see more...
			</div>

			<div className="sm:flex flex-wrap justify-center items-center text-center gap-3">
				{registeredEvents.slice(0, 3).map((event) => (
					<EventCard event={event} key={event.name} />
				))}
			</div>
			<div className="flex flex-row text-black font-bold  pt-9 pl-32 ">
				Favourite Events
			</div>
			<div className="flex flex-row-reverse text-red-600 font-bold  pr-32">
				see more...
			</div>
			<div className="sm:flex flex-wrap justify-center items-center text-center gap-3">
				{interestedEvents.slice(0, 3).map((event) => (
					<EventCard event={event} key={event.name} />
				))}
			</div>
			<div className="flex flex-row text-black font-bold  pt-9 pl-32 ">
				Find Events
			</div>
			<div className="flex flex-row-reverse text-red-600 font-bold  pr-32">
				see more...
			</div>
		</div>
	);
};
