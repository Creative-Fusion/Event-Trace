import React from "react";

export const EventCard = ({ event }) => {
	return (
		<div className="h-40 drop-shadow bg-primary">
			<div className="h-3/5 w-full">
				<img
					src={event.coverImage}
					alt={event.name + "'s Cover Image"}
					className="w-full object-cover"
				/>
			</div>
			<div>
				<h4>{event.name}</h4>
				<p>
					{event.dateTime.startDate} - {event.dateTime.endDate}
				</p>
				<p>{event.location.location}</p>
			</div>
		</div>
	);
};
