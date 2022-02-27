import { fake_event, fake_organizer } from "../../../data/fakeDB";
import { Tabs } from "./Tabs";

export const EventDescription = () => {
	const event = fake_event;
	const organizer = fake_organizer;

	return (
		<div className="w-screen">
			<section className="w-full lg:h-[32rem] md:h-[24rem] h-[18rem] bg-grey">
				<div className="w-full h-full bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600">
					<img
						src={event.coverImage}
						alt={event.name + "'s Cover"}
						className="sm:w-4/5 w-full object-cover mx-auto h-full"
					/>
				</div>
			</section>
			<section className="">
				<Tabs event={event} organizer={organizer} />
			</section>
		</div>
	);
};
