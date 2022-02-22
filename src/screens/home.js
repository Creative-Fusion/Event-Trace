import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { EventCard } from "../components/EventCard";
import { allEvents } from "../redux/actions/eventActions";
import { EventRequest, EVENT_REQUESTS } from "../request/eventRequest";

export const Home = () => {
	const dispatch = useDispatch();

	const events = [
		{
			name: "KU HackFest 2022",
			description:
				"Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. ",
			dateTime: {
				startDate: "22 February, 2022",
				endDate: "24 February, 2022",
				startTime: "09:00",
				endTime: "18:00",
			},
			type: "Physical",
			coverImage:
				"https://techsathi.com/wp-content/uploads/2020/12/KU-Hackfest-2021.png",
			location: {
				location: "Kathmandu University, Dhulikhel",
			},
			categories: ["Educational", "Social"],
			creator: {
				id: "1",
				role: "Organization",
			},
		},
		{
			name: "Python Workshop",
			description:
				"Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. ",
			dateTime: {
				startDate: "28 February, 2022",
				endDate: "28 February, 2022",
				startTime: "09:00",
				endTime: "18:00",
			},
			type: "Virtual",
			coverImage:
				"https://techsathi.com/wp-content/uploads/2020/12/KU-Hackfest-2021.png",
			location: {
				location: "Dhulikhel, Kavre",
			},
			categories: ["Educational", "Technology"],
			creator: {
				id: "2",
				role: "Organization",
			},
		},
		{
			name: "Music Event",
			description:
				"Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. ",
			dateTime: {
				startDate: "26 February, 2022",
				endDate: "27 February, 2022",
				startTime: "09:00",
				endTime: "18:00",
			},
			type: "Physical",
			coverImage:
				"https://techsathi.com/wp-content/uploads/2020/12/KU-Hackfest-2021.png",
			location: {
				location: "Kathmandu University, Dhulikhel",
			},
			categories: ["Social"],
			creator: {
				id: "1",
				role: "Organization",
			},
		},
		{
			name: "KU HackFest 2022",
			description:
				"Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. ",
			dateTime: {
				startDate: "22 February, 2022",
				endDate: "24 February, 2022",
				startTime: "09:00",
				endTime: "18:00",
			},
			type: "Physical",
			coverImage:
				"https://techsathi.com/wp-content/uploads/2020/12/KU-Hackfest-2021.png",
			location: {
				location: "Kathmandu University, Dhulikhel",
			},
			categories: ["Educational", "Social"],
			creator: {
				id: "1",
				role: "Organization",
			},
		},
	];

	// useEffect(() => {
	// 	EventRequest(EVENT_REQUESTS.ALL_EVENTS).then((events) => {
	// 		console.log(events);
	// 		dispatch(allEvents(events));
	// 	});
	// });

	return (
		<div className="grid grid-cols-3 gap-10">
			{/* {events.map((event) => (
				<EventCard event={event} />
			))} */}
		</div>
	);
};
