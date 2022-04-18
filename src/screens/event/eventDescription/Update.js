import React, { useState } from "react";
import {
	Form,
	Input,
	InputNumber,
	Select,
	Modal,
	Checkbox,
	DatePicker,
	TimePicker,
} from "antd";
import { categories } from "../../../data/data";
import { fake_event } from "../../../data/fakeDB";
import { DateTime } from "../../../data/classes";

export const Update = () => {
	const event = fake_event;

	const rules = { required: true, message: "Invalid Detail." };
	const [loading, setLoading] = useState(false);
	const [selectedCategories, setCategories] = useState(event.categories);
	const [type, setType] = useState(event.type);
	const [categoryModalVisible, setCategoryModalVisible] = useState(false);
	return (
		<div className="md:w-4/6 w-9/12 mx-auto">
			<Form
				name="createEvent"
				layout="vertical"
				autoComplete="off"
				initialValues={{
					name: event.name,
					type: event.type,
					description: event.description,
					location: event.location.location ? event.location.location : null,
					eventLink: event.eventLink ? event.eventLink : null,
					fee: event.fee ? event.fee : null,
					participantLimit: event.participantLimit
						? event.participantLimit
						: null,
					dates: [
						DateTime.toMomentDate(event.dateTime.startDate),
						DateTime.toMomentDate(event.dateTime.endDate),
					],
					times: [
						DateTime.toMomentTime(event.dateTime.startTime),
						DateTime.toMomentTime(event.dateTime.endTime),
					],
				}}
				onFinish={(e) => console.log(e)}
			>
				<h2 className="mb-6 px-3">Create an Event</h2>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Name" name={"name"} rules={[rules]}>
							<Input className="form-input" placeholder="Full Name" />
						</Form.Item>
					</div>
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Type" name={"type"} rules={[rules]}>
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
					<Form.Item label="Description" name={"description"} rules={[rules]}>
						<Input.TextArea
							rows={4}
							className="form-input"
							placeholder="About Your Event"
						/>
					</Form.Item>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-2/3 px-3">
						<Form.Item label="Categories" name={"categories"} rules={[rules]}>
							<div
								className="form-input"
								onClick={() => setCategoryModalVisible(true)}
							>
								<input
									className="w-full bg-transparent border-none h-full cursor-pointer"
									placeholder="Select Your Categories"
									name="categories"
									value={selectedCategories.join(", ")}
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
						>
							<Checkbox.Group
								options={categories}
								defaultValue={selectedCategories}
								onChange={(v) => setCategories(v.sort())}
							/>
						</Modal>
					</div>
					<div className="w-full sm:w-1/3 px-3">
						<Form.Item label="Event Fee" name={"fee"}>
							<InputNumber className="form-input" placeholder="Event Fee" />
						</Form.Item>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-2/3 px-3">
						{type === "Physical" ? (
							<Form.Item label="Location" name={"location"} rules={[rules]}>
								<Input className="form-input" placeholder="Location" />
							</Form.Item>
						) : (
							<Form.Item label="Event Link" name={"eventLink"} rules={[rules]}>
								<Input className="form-input" placeholder="Event Link" />
							</Form.Item>
						)}
					</div>
					<div className="w-full sm:w-1/3 px-3">
						<Form.Item label="Participation Limit" name={"participantLimit"}>
							<InputNumber
								className="form-input"
								placeholder="Participation Limit"
							/>
						</Form.Item>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Date" name={"dates"} rules={[rules]}>
							<DatePicker.RangePicker
								className="form-input"
								disabledDate={DateTime.disabledDate}
								renderExtraFooter={() => (
									<em>**Select same dates if it is a one day event.</em>
								)}
							/>
						</Form.Item>
					</div>
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Time" name={"times"} rules={[rules]}>
							<TimePicker.RangePicker
								format="HH:mm"
								className="form-input"
								onChange={(e) => console.log(e)}
							/>
						</Form.Item>
					</div>
				</div>
				<div className="flex p-4">
					<button
						className="filled-primary-btn justify-content-center m-auto py-3"
						disabled={loading}
						type="submit"
					>
						{loading ? "Creating" : "Create Event"}
					</button>
				</div>{" "}
			</Form>
		</div>
	);
};
