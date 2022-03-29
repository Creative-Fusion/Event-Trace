import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "antd";
export const Tabs = () => {
	return (
		<div className="pb-6">
			<Menu
				mode="horizontal"
				className="justify-center w-9/12 mx-auto border-b-2 mb-6"
			>
				<Menu.Item>
					<NavLink to="about" className="px-5 py-3 text-base font-semibold">
						About
					</NavLink>
				</Menu.Item>
				<Menu.Item>
					<NavLink to="organizer" className="px-5 py-3 text-base font-semibold">
						Organizer
					</NavLink>
				</Menu.Item>
				<Menu.Item>
					<NavLink
						to="participants"
						className="px-5 py-3 text-base font-semibold"
					>
						Participants
					</NavLink>
				</Menu.Item>
				<Menu.Item>
					<NavLink to="update" className="px-5 py-3 text-base font-semibold">
						Update
					</NavLink>
				</Menu.Item>
			</Menu>
			<Outlet />
		</div>
	);
};
