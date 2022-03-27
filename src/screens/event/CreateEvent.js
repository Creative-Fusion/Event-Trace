import React, { useState } from "react";
import EventImage from "../../app-images/event1.png";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { eventSchema } from "../../model/event";
import { EventRequest } from "../../request/eventRequest";
import { useDispatch } from "react-redux";
import { categories } from "../../data/data";
import { createEvent as create } from "../../redux/actions/eventActions";
import { ActionTypes } from "../../redux/constants/actionTypes";
import {
	Form,
	Input,
	InputNumber,
	Select,
	Modal,
	Checkbox,
	DatePicker,
	TimePicker,
	Button,
} from "antd";

export const CreateEvent = () => {
	const caption = "Create Your Own Event";
	const dispatch = useDispatch();

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
		newEvent.name = name;
		newEvent.type = type;
		newEvent.categories = selectedCategories;
		newEvent.eventLink = eventLink;
		newEvent.location = { location: location };
		newEvent.participantLimit = parseInt(participantLimit);
		newEvent.dateTime = {
			startDate: startDate,
			endDate: endDate,
			startTime: startTime,
			endTime: endTime,
		};
		EventRequest(ActionTypes.EVENT.CREATE_EVENT, { data: newEvent }).then(
			(createdEvent) => {
				dispatch(create(createdEvent));
			}
		);
	};

	const [name, setName] = useState("");
	const [type, setType] = useState("Physical");
	const [selectedCategories, setCategories] = useState([]);
	const [eventLink, setEventLink] = useState("");
	const [location, setLocation] = useState("");
	const [participantLimit, setParticipantLimit] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");

	let [categoriesStr, setCategoriesStr] = useState("");

	const [categoryModalVisible, setCategoryModalVisible] = useState(false);

	return (
		<div className="lg:grid lg:grid-cols-2 w-full p-8">
			<div className="lg:w-full lg:h-full hidden lg:flex px-6 order-last">
				<div className="my-auto">
					<img src={EventImage} alt={caption} className="w-[95%] mx-auto" />
					<h3 className="text-3xl font-bold text-center text-primary pt-5">
						{caption}
					</h3>
				</div>
			</div>

			<Form
				name="createEvent"
				layout="vertical"
				autoComplete="off"
				initialValues={{ type: "Physical" }}
			>
				<h2 className="mb-6 px-3">Create an Event</h2>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Name" name={"fullName"}>
							<Input className="form-input" placeholder="Full Name" />
						</Form.Item>
					</div>
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Type" name={"type"}>
							<Select
								className="form-input py-2"
								bordered={false}
								onChange={(val) => setType(val)}
							>
								<Select.Option value="Physical">Physical</Select.Option>
								<Select.Option value="Virtual">Virtual</Select.Option>
							</Select>
						</Form.Item>
					</div>
				</div>
				<div className="w-full px-3">
					<Form.Item label="Categories" name={"categories"}>
						{/* <Button
								className="form-input text-left my-auto  hover:bg-gray-200 hover:text-gray-500"
								onClick={() => console.log("clicked")}
							>
								<span>Select Your Categories</span>
							</Button> */}
						<div
							className="form-input"
							onClick={() => setCategoryModalVisible(true)}
						>
							<input
								className="w-full bg-transparent border-none h-full cursor-pointer"
								placeholder="Select Your Categories"
								disabled
							></input>
						</div>
					</Form.Item>
					<Modal
						title="Select Your Categories"
						visible={categoryModalVisible}
						centered
						onOk={() => setCategoryModalVisible(false)}
						onCancel={() => setCategoryModalVisible(false)}
						okText={
							<span className="text-primary text-semibold hover:text-white">
								Done
							</span>
						}
						okButtonProps={{ type: "primary" }}
					>
						<Checkbox.Group
							options={categories}
							onChange={(v) => console.log(v)}
						/>
					</Modal>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-2/3 px-3">
						{type === "Physical" ? (
							<Form.Item label="Location" name={"location"}>
								<Input className="form-input" placeholder="Location" />
							</Form.Item>
						) : (
							<Form.Item label="Event Link" name={"eventLink"}>
								<Input className="form-input" placeholder="Event Link" />
							</Form.Item>
						)}
					</div>
					<div className="w-full sm:w-1/3 px-3">
						<Form.Item label="Participation Limit" name={"participationLimit"}>
							<InputNumber
								className="form-input"
								placeholder="Participation Limit"
							/>
						</Form.Item>
					</div>
				</div>
				<p className="text-center text-red-600 italic">
					***This event will be sent for review before publishing. <br />
					It may take upto 48 hours.***
				</p>
				<div className="flex p-4">
					<button
						className="filled-primary-btn justify-content-center m-auto"
						// onClick={saveEvent}
					>
						Create Event
					</button>
				</div>{" "}
			</Form>
		</div>
	);
};
