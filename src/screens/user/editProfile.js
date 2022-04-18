import React from "react";
import { Avatar, Badge, Form, Input, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit } from "@react-icons/all-files/md/MdEdit";
import { updateUser, UserRole } from "../../services/crud/user";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
	const { currentUser } = useSelector((state) => state.users);
	const rules = { required: true, message: "Invalid Detail." };
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const saveUser = async (u) => {
		const updatedUser = {
			name: `${u.firstName} ${u.lastName}`,
			email: currentUser.email,
			address: u.address,
			phone: u.phone,
			bio: u.bio,
		};
		if (currentUser.role === UserRole.USER) updatedUser.gender = u.gender;
		if (currentUser.role === UserRole.ORGANIZATION)
			updatedUser.website = u.website;
		await updateUser(updatedUser, currentUser.id, dispatch);
		message.success("Updated your account.");
		navigate("/u/0/profile");
	};

	return (
		<div className="h-full w-full px-10">
			<h2>Edit Profile</h2>
			<Form
				name="UserProfile"
				layout="vertical"
				autoComplete="off"
				initialValues={{
					firstName: currentUser.name
						? `${currentUser.name.split(" ")[0]}`
						: null,
					lastName: currentUser.name
						? `${currentUser.name.split(" ")[1]}`
						: null,
					email: `${currentUser.email}`,
					gender: currentUser.gender ? `${currentUser.gender}` : null,
					website: currentUser.website ? `${currentUser.website}` : null,
					address: currentUser.address ? `${currentUser.address}` : null,
					phone: currentUser.phone ? `${currentUser.phone}` : null,
					bio: currentUser.bio ? `${currentUser.bio}` : null,
				}}
				onFinish={(u) => saveUser(u)}
			>
				{/* //TODO: Upload Image */}
				<Form.Item name={"profileImage"} className="w-fit mx-auto">
					<Badge
						count={
							<div className="rounded-full bg-white h-7 aspect-square shadow-lg">
								<MdEdit className="mx-auto my-1.5 text-primary h-4" />
							</div>
						}
						offset={[-30, 120]}
					>
						<Avatar
							className="w-32 h-32"
							src={
								<img
									src={currentUser.profileImage}
									className="object-cover"
									alt={`${currentUser.name}'s Profile`}
								/>
							}
						/>
					</Badge>
				</Form.Item>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="First Name" name={"firstName"} rules={[rules]}>
							<Input className="form-input" placeholder="First Name" />
						</Form.Item>
					</div>
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Last Name" name={"lastName"} rules={[rules]}>
							<Input className="form-input" placeholder="Last Name" />
						</Form.Item>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-2/3 px-3">
						<Form.Item label="Email" name={"email"} rules={[rules]}>
							<Input className="form-input" disabled />
						</Form.Item>
					</div>
					<div className="w-full sm:w-1/3 px-3">
						{currentUser.role === UserRole.USER && (
							<Form.Item label="Gender" name={"gender"} rules={[rules]}>
								<Select
									className="form-input py-2"
									bordered={false}
									placeholder="Gender"
								>
									<Select.Option value="Male">Male</Select.Option>
									<Select.Option value="Female">Female</Select.Option>
								</Select>
							</Form.Item>
						)}
						{currentUser.role === UserRole.ORGANIZATION && (
							<Form.Item label="Website" name={"website"} rules={[rules]}>
								<Input className="form-input" placeholder="Website" />
							</Form.Item>
						)}
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Address" name={"address"} rules={[rules]}>
							<Input className="form-input" placeholder="Address" />
						</Form.Item>
					</div>
					<div className="w-full sm:w-1/2 px-3">
						<Form.Item label="Phone Number" name={"phone"} rules={[rules]}>
							<Input className="form-input" placeholder="Phone Number" />
						</Form.Item>
					</div>
				</div>
				<div className="w-full px-3">
					<Form.Item label="Bio" name={"bio"}>
						<Input.TextArea
							rows={4}
							className="form-input"
							placeholder="About Yourself"
						/>
					</Form.Item>
				</div>
				<button type="submit" className="filled-primary-btn m-auto py-3">
					Save
				</button>
			</Form>
		</div>
	);
};
