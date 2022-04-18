import { Tabs } from "./Tabs";
import DefaultCover from "../../../app-images/DefaultCover.png";
import { useGetEvent } from "./eventFunctions";

export const EventDescription = () => {
	// !Check
	const event = useGetEvent();

	return (
		<div className="w-full">
			<section className="w-full lg:h-[32rem] md:h-[24rem] h-[18rem] bg-grey">
				<div className="w-full h-full bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600">
					<img
						src={event.coverImage ?? DefaultCover}
						alt={event.name + "'s Cover"}
						className="sm:w-4/5 w-full object-cover mx-auto h-full"
					/>
				</div>
			</section>
			<section className="">
				<Tabs />
			</section>
		</div>
	);
};
