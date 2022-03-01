import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Badge } from "./Badge";

export const EventCard = ({ event }) => {
	const navigate = useNavigate();

	const [interested, setInterested] = useState(false);

	return (
		<div className="shadow-lg max-w-xs rounded-sm overflow-hidden mx-8 my-5 shrink">
			<div className="relative">
				<img
					src={event.coverImage}
					alt={event.name + "'s Cover Image"}
					className="h-52 object-cover"
					onClick={() => navigate("/events/1")}
				/>
				<Badge text="2 days" />

				{event.type === "Virtual" && (
					<Badge
						text="virtual"
						bgColor="bg-green-700"
						position="top-5 left-5"
					/>
				)}
				<div
					className="absolute rounded-full w-10 h-10 flex items-center justify-center bg-white shadow-md text-primary -bottom-5 right-5 z-50"
					onClick={() => setInterested(!interested)}
				>
					{!interested && <BsBookmark className="w-5 h-5" />}
					{interested && <BsBookmarkFill className="w-5 h-5" />}
				</div>
			</div>
			<div className="px-4 py-2">
				<div className="text-left" onClick={() => navigate("/events/1")}>
					<h3>{event.name}</h3>
					<p>{event.dateTime.startDate}</p>
					{event.type === "Physical" && <p>{event.location.location}</p>}
					{event.type === "Virtual" && <p>{event.eventLink}</p>}
				</div>
			</div>
			<div className="flex overflow-auto px-4 pb-4 pt-1">
				{event.categories.slice(0, 3).map((category) => {
					return (
						<div
							className="w-fit snap-start bg-secondary text-primary rounded-full py-1 px-3 text-sm font-semibold mr-2"
							key={category}
						>
							{category}
						</div>
					);
				})}
			</div>
		</div>
	);
};
