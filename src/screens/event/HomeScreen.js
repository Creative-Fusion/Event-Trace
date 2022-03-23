import React from "react";
import { fakeEventList } from "../../data/fakeDB";
import { Link } from "react-router-dom";
import { OneRowList, MultipleRowList } from "../../components/eventList";

export const HomeScreen = () => {
	const allEvents = fakeEventList;
	const interestedEvents = fakeEventList.slice(4, 10);
	const registeredEvents = fakeEventList.slice(1, 5);
	return (
		<div className="h-full">
			<section>
				<div className="flex justify-between lg:mx-20 md:mx-10 mx-6  items-center">
					<h2>Intrested Events</h2>
					<Link
						to="/"
						className="text-blue-500 font-medium text-sm underline underline-offset-2 hover:font-semibold hover:text-primary ease-out-transition"
					>
						See More
					</Link>
				</div>
				<OneRowList events={interestedEvents.slice(0, 8)} />
			</section>
			<section>
				<div className="flex justify-between lg:mx-20 md:mx-10 mx-6  items-center">
					<h2>Registered Events</h2>
					<Link
						to="/"
						className="text-blue-500 font-medium text-sm underline underline-offset-2 hover:font-semibold hover:text-primary ease-out-transition"
					>
						See More
					</Link>
				</div>
				<OneRowList events={registeredEvents.slice(0, 8)} />
			</section>
			<section>
				<div className="flex justify-between lg:mx-20 md:mx-10 mx-6  items-center">
					<h2>All Events</h2>
					<Link
						to="/"
						className="text-blue-500 font-medium text-sm underline underline-offset-2 hover:font-semibold hover:text-primary ease-out-transition"
					>
						See More
					</Link>
				</div>
				<MultipleRowList events={allEvents} />
			</section>
		</div>
	);
};
