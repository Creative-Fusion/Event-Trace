import React, { useState } from "react";
import { FiClock } from "@react-icons/all-files/fi/FiClock";
import { BiCalendarStar } from "@react-icons/all-files/bi/BiCalendarStar";
import { MdOutlineLocationOn } from "react-icons/md";
import { Container } from "../../../components/container";
import { IconedInfoList } from "../../../components/IconedInfoList";
import { TrimmedText } from "../../../components/trimmedText";
import {
	BsBookmark,
	BsBookmarkFill,
	BsGlobe2,
	BsStarFill,
} from "react-icons/bs";
import { Badge } from "../../../components/Badge";
import { useGetEvent } from "./eventFunctions";
import { useSelector } from "react-redux";
import { DateTime } from "../../../data/classes";
import { message } from "antd";

const CategoryTag = ({ category }) => {
	return (
		<div className="h-30 w-full bg-secondary text-primary rounded-full px-5 py-1.5 font-semibold text-center my-3">
			{category}
		</div>
	);
};

export const About = () => {
	const [interested, setInterested] = useState(false);
	const event = useGetEvent();
	const { loggedIn, currentUser } = useSelector((state) => state.users);

	const conditions = () => {
		let state = { disabled: true, message: "" };
		if (!loggedIn) state.message = "Please login to perform this action.";
		else if (currentUser.id === event.creator.id)
			state.message = "You cannot perform this action.";
		else if (DateTime.isBefore(event.dateTime.startDate))
			state.message = "This event has already been conducted.";
		else state.disabled = false;
		return state;
	};

	const infoList = () => {
		const list = [
			{
				value: `${DateTime.formattedDate(
					event.dateTime.startDate
				)} - ${DateTime.formattedDate(event.dateTime.endDate)}`,
				icon: <BiCalendarStar className="w-6 h-6" />,
			},
			{
				value: `${event.dateTime.startTime} - ${event.dateTime.endTime}`,
				icon: <FiClock className="w-6 h-6" />,
			},
		];
		if (event.type === "Physical")
			list.push({
				value: event.location.location,
				icon: <MdOutlineLocationOn className="w-6 h-6" />,
			});
		else {
			if (event.website)
				list.push({
					value: event.website,
					icon: <BsGlobe2 className="w-6 h-6" />,
				});
		}
		return list;
	};
	let avail = conditions();

	const addToInterested = () => {
		if (avail.disabled) message.error(avail.message);
		else {
			console.log("Add TO INTERESTED");
		}
	};

	const addToRegistered = () => {
		if (avail.disabled) message.error(avail.message);
		else {
			console.log("Add TO REGISTERED");
		}
	};

	return (
		<div className="md:w-4/6 w-9/12 mx-auto">
			<div className="md:grid md:grid-cols-5 lg:gap-20 gap-10">
				<div className="col-span-3 text-left">
					<h2 className="inline pr-3">{event.name}</h2>
					<span className="inline-block">
						{event.type === "Virtual" && (
							<Badge text="virtual" bgColor="bg-green-700" absolute={false} />
						)}
					</span>
					<div className="pt-2 pb-5">
						<TrimmedText text={event.description} />
					</div>
					<IconedInfoList list={infoList()} />
				</div>
				<div className="flex col-span-2 md:w-full xs:w-[300px] max-h-[380px] mx-auto">
					<Container>
						<div className="flex shrink h-full flex-col place-content-between">
							<div>
								<h5>Category</h5>
								{event.categories.map((category) => {
									return <CategoryTag key={category} category={category} />;
								})}
							</div>
							<div className="w-full my-3">
								<div className="text-center text-[#6C6C6C] font-semibold text-sm opacity-70">
									{event.fee !== null && event.fee !== 0 && (
										<p>{`Nrs. ${event.fee} per entry`}</p>
									)}
									{(event.fee === null || event.fee === 0) && <p>Free</p>}
									<hr className="bg-gradient-to-r border-2 from-[#FBFBFB] via-[#6C6C6C] to-[#FBFBFB]" />
								</div>
								{currentUser.id !== event.creator.id && (
									<div>
										<button
											className="flex items-center place-content-center outlined-primary-btn w-full mt-4 mb-2 py-2"
											onClick={() => addToInterested()}
											disabled={avail.disabled}
										>
											Add to Favourites{" "}
											<span className="pl-1">
												{!interested && <BsBookmark className="w-5 h-5" />}
												{interested && <BsBookmarkFill className="w-5 h-5" />}
											</span>
										</button>
										<button
											disabled={avail.disabled}
											className="filled-primary-btn py-3 w-full"
											onClick={() => addToRegistered()}
										>
											Register
										</button>
									</div>
								)}
								{currentUser.id === event.creator.id && (
									<Badge
										text="Organizer"
										absolute={false}
										icon={<BsStarFill className="w-4 h-4" />}
										bgColor="bg-green-700"
										className="h-fit my-auto mt-4 py-2.5"
									/>
								)}
							</div>
						</div>
					</Container>
				</div>
			</div>
		</div>
	);
};
