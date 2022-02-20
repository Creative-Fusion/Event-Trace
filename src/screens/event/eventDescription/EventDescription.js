import { Tabs } from "./Tabs";

export const EventDescription = () => {
	const event = {
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
	};

	const organizer = {
		id: "1",
		name: "Kathmandu University Computer Club",
		email: "kuhackfest2022@gmail.com",
		description:
			"Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. ",
		phone: "+977-9810101010",
		website: "www.kuhackfest.com",
		profileImage:
			"https://dl.airtable.com/.attachmentThumbnails/92020239ebbd95f0a24cc87065621906/e020fe8e",
		connect: [
			{
				media: "facebook",
				url: "www.facebook.com",
			},
			{
				media: "instagram",
				url: "www.instagram.com",
			},
			{
				media: "youtube",
				url: "https://www.youtube.com",
			},
		],
	};

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
