import React from "react";
import EventImage from "../app-images/event1.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export const CreateEvent = () => {
	const caption = "Create Your Own Event";
	const categories = [
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

	return (
		<div className="lg:grid lg:grid-cols-2 w-screen mx-8 my-4">
			<div className="lg:w-full lg:h-full h-0 w-0 flex p-6 order-last">
				<div className="my-auto">
					<img src={EventImage} alt={caption} className="w-[95%] mx-auto" />
					<h3 className="text-3xl font-bold text-primary pt-5">{caption}</h3>
				</div>
			</div>

			<form className="w-full lg:max-width-xl pl-16 lg:pr-0 pr-16 my-8">
				<div className="text-left w-full">
					<h2 className="text-2xl font-bold mb-6 -mx-2">Create an Event</h2>
					<div className="flex flex-wrap -mx-5 mb-1 sm:mb-2">
						<div className="w-full sm:w-1/2 px-3 mb-1">
							<label className="form-label" htmlFor="name">
								Name <span className="text-red-600">*</span>
							</label>
							<input
								className="form-input"
								id="first-name"
								type="text"
								placeholder=""
							/>
							{/* <p className ="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
						</div>
						<div className="w-full sm:w-1/2 px-3 mb-1">
							<label className="form-label" htmlFor="type">
								Type
							</label>
							<select className="form-input" id="type">
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
									id="categories cursor-pointer"
									data-dropdown-toggle="dropdown"
									placeholder="Select Your Categories"
									disabled
								/>
								<IoIosArrowDown className="w-4 h-4 absolute inset-y-3.5 right-3" />
							</div>
							<div
								className="w-full hidden h-fit pt-2 mb-4 flex-wrap flex-row gap-2"
								id="category-list"
							>
								{categories.map((category) => {
									return (
										<div className="" key={category}>
											<input
												type="checkbox"
												name={category}
												id={category}
												className="w-4 h-4 bg-gray-300 rounded border-none"
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
								Location/Event Link <span className="text-red-600">*</span>
							</label>
							<input className="form-input" id="address" type="text" />
						</div>
						<div className="w-full sm:w-2/6 px-3 mb-1">
							<label className="form-label" htmlFor="participant-limit">
								Participant Limit
							</label>
							<input
								className="form-input"
								id="participant-limit"
								type="text"
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
								/>
								<input
									className="form-input"
									id="end-date"
									type="date"
									placeholder="End Date"
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
								/>
								<input
									className="form-input"
									id="end-time"
									type="time"
									placeholder="End Time"
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
					className="btn py-3 px-5 justify-self-center hover:border-primary hover:bg-transparent hover:text-primary hover:border-2 bg-primary text-secondary ease-out-transition mt-4"
					type="submit"
					onClick={() => console.log("Submit")}
				>
					Create Event
				</button>
			</form>
		</div>
	);
};
