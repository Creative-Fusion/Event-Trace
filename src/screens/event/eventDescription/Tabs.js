import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "antd";
import { useSelector } from "react-redux";
import { useGetEvent } from "./eventFunctions";

export const Tabs = () => {
	const { currentUser } = useSelector((state) => state.users);
	const event = useGetEvent();
	const isOrganizer = currentUser.id === event.creator.id;
	return (
		<div className="pb-6">
			<Menu
				mode="horizontal"
				className="justify-center w-9/12 mx-auto border-b-2 mb-6"
			>
				<Menu.Item key={"about"}>
					<NavLink to="about" className="px-5 py-3 text-base font-semibold">
						About
					</NavLink>
				</Menu.Item>
				<Menu.Item key={"organizer"}>
					<NavLink to="organizer" className="px-5 py-3 text-base font-semibold">
						Organizer
					</NavLink>
				</Menu.Item>
				{isOrganizer && (
					<Menu.Item key={"participants"}>
						<NavLink
							to="participants"
							className="px-5 py-3 text-base font-semibold"
						>
							Participants
						</NavLink>
					</Menu.Item>
				)}
				{isOrganizer && (
					<Menu.Item key={"update"}>
						<NavLink to="update" className="px-5 py-3 text-base font-semibold">
							Update
						</NavLink>
					</Menu.Item>
				)}
			</Menu>
			{event && <Outlet />}
		</div>
	);
};
