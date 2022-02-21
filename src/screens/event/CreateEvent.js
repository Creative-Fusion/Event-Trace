import React, { useState } from "react";
import EventImage from "../../app-images/event1.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { eventSchema } from "../../model/event";

export const CreateEvent = () => {
	const caption = "Create Your Own Event";
	const availableCategories = [
		"Adventure",
		"Cosplay",
		"Educational",
		"Festival",
		"History",
		"Literature",
		"Science",
		"Social",
		"Sports",
		"Technology",
		"Other",
	];

	const showCategoryList = () => {
		const hiddenData = document.querySelector("#category-list");

		if (hiddenData.classList.contains("hidden")) {
			hiddenData.classList.remove("hidden");
			hiddenData.classList.add("flex");
		} else {
			hiddenData.classList.add("hidden");
			hiddenData.classList.remove("flex");
		}
	};

	const saveEvent = () => {
		const newEvent = eventSchema;
		newEvent.id = Date.now();
		newEvent.name = name;
		newEvent.type = type;
		newEvent.categories = categories;
		newEvent.eventLink = eventLink;
		newEvent.location = { location: location };
		newEvent.participantLimit = parseInt(participantLimit);
		newEvent.dateTime = {
			startDate: startDate,
			endDate: endDate,
			startTime: startTime,
			endTime: endTime,
		};
	};

	const [name, setName] = useState("");
	const [type, setType] = useState("Physical");
	const [categories, setCategories] = useState([]);
	const [eventLink, setEventLink] = useState("");
	const [location, setLocation] = useState("");
	const [participantLimit, setParticipantLimit] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");

	let [categoriesStr, setCategoriesStr] = useState("");

	return (
		<div className="lg:grid lg:grid-cols-2 w-screen mx-8 my-4">
			<div className="lg:w-full lg:h-full hidden lg:flex p-6 order-last">
				<div className="my-auto">
					<img src={EventImage} alt={caption} className="w-[95%] mx-auto" />
					<h3 className="text-3xl font-bold text-primary pt-5">{caption}</h3>
				</div>
			</div>

			<form className="w-full lg:max-width-xl px-6 xs:px-16 lg:pr-0 my-8 pb-4 shrink">
				<div className="text-left w-full">
					<h2 className="mb-6 -mx-2">Create an Event</h2>
					<div className="flex flex-wrap -mx-5 mb-1 sm:mb-2">
						<div className="w-full sm:w-1/2 px-3 mb-1">
							<label className="form-label" htmlFor="name">
								Name <span className="text-red-600">*</span>
							</label>
							<input
								className="form-input"
								id="first-name"
								type="text"
								placeholder="Full Name"
								value={name}
								onChange={(value) => setName(value.target.value)}
							/>
							{/* <p className ="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
						</div>
						<div className="w-full sm:w-1/2 px-3 mb-1">
							<label className="form-label" htmlFor="type">
								Type
							</label>
							<select
								className="form-input"
								id="type"
								value={type}
								onChange={(value) => setType(value.target.value)}
							>
								<option>Physical</option>
								<option>Virtual</option>
							</select>
						</div>
					</div>
					<div className="flex flex-wrap -mx-5 mb-1 sm:mb-2">
						<div className="w-full px-3">
							<label className="form-label" htmlFor="categories">
								Categories <span className="text-red-600">*</span>
							</label>
							<div
								className="form-input relative cursor-pointer"
								onClick={showCategoryList}
							>
								<input
									id="categories"
									className="w-full cursor-pointer"
									// data-dropdown-toggle="dropdown"
									placeholder="Select Your Categories"
									value={categoriesStr}
									disabled
								/>

								<IoIosArrowDown className="w-4 h-4 absolute inset-y-3.5 right-3" />
							</div>
							<div
								className="w-full hidden h-fit pt-2 mb-4 flex-wrap flex-row gap-2"
								id="category-list"
							>
								{availableCategories.map((category) => {
									return (
										<div key={category}>
											<input
												type="checkbox"
												name={category}
												id={category}
												className="w-4 h-4 bg-gray-300 rounded border-none"
												onClick={() => {
													let newList = categories;
													if (categories.includes(category))
														newList.splice(newList.indexOf(category), 1);
													else newList.push(category);
													setCategories(newList);
													setCategoriesStr(categories.join(", "));
												}}
											/>
											<label
												htmlFor={category}
												className="text-gray-600 text-base font-medium px-2"
											>
												{category}
											</label>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="flex flex-wrap -mx-5 mb-1 sm:mb-2">
						<div className="w-full sm:w-4/6 px-3 mb-1">
							<label className="form-label" htmlFor="address">
								{type === "Physical" && <span>Location</span>}
								{type === "Virtual" && <span>Event Link</span>}
								<span className="text-red-600">*</span>
							</label>
							{type === "Physical" && (
								<input
									className="form-input"
									id="address"
									type="text"
									placeholder="Event Location"
									value={location}
									onChange={(value) => setLocation(value.target.value)}
								/>
							)}
							{type === "Virtual" && (
								<input
									className="form-input"
									id="address"
									type="text"
									placeholder="Event Link"
									value={eventLink}
									onChange={(value) => setEventLink(value.target.value)}
								/>
							)}
						</div>
						<div className="w-full sm:w-2/6 px-3 mb-1">
							<label className="form-label" htmlFor="participant-limit">
								Participant Limit
							</label>
							<input
								className="form-input"
								id="participant-limit"
								type="number"
								min="0"
								placeholder="Participation Limit"
								value={participantLimit}
								onChange={(value) => setParticipantLimit(value.target.value)}
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-5 mb-1 sm:mb-2">
						<div className="w-full sm:w-1/2 px-3 mb-1">
							<label className="form-label" htmlFor="date">
								Date <span className="text-red-600">*</span>
							</label>
							<div id="date">
								<input
									className="form-input"
									id="start-date"
									type="date"
									placeholder="Start Date"
									value={startDate}
									onChange={(value) => setStartDate(value.target.value)}
								/>
								<input
									className="form-input"
									id="end-date"
									type="date"
									placeholder="End Date"
									value={endDate}
									onChange={(value) => setEndDate(value.target.value)}
								/>
							</div>
						</div>
						<div className="w-full sm:w-1/2 px-3 mb-1">
							<label className="form-label" htmlFor="time">
								Time <span className="text-red-600">*</span>
							</label>
							<div id="date">
								<input
									className="form-input"
									id="start-time"
									type="time"
									placeholder="Start Time"
									value={startTime}
									onChange={(value) => setStartTime(value.target.value)}
								/>
								<input
									className="form-input"
									id="end-time"
									type="time"
									placeholder="End Time"
									value={endTime}
									onChange={(value) => setEndTime(value.target.value)}
								/>
							</div>
						</div>
					</div>
				</div>

				{/*TODO: Add Condition
				1. If the current user is not an organization.
				2. If the current user is an organization but has not been verified. */}
				<p className="text-center text-red-600 italic">
					***This event will be sent for review before publishing. <br />
					It may take upto 48 hours.***
				</p>

				<button
					className="filled-primary-btn justify-self-center mt-4"
					// type="submit"
					onClick={saveEvent}
				>
					Create Event
				</button>
			</form>
		</div>
	);
};
