import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Tabs = () => {
	const [tmHidden, setTMHidden] = useState(true);

	const activeTab = ({ isActive }) => ({
		color: isActive ? "#E8E6FF" : "#515050",
		background: isActive ? "#5B4DFF" : "white",
	});

	return (
		<div>
			<nav className="md:w-4/6 w-9/12 mx-auto mb-6">
				<ul className="flex justify-around mx-10 border-b-2 border-gray-400">
					<NavLink
						to="about"
						className="px-5 py-3 text-base font-semibold"
						style={activeTab}
					>
						<span className="my-auto">About</span>
					</NavLink>
					<NavLink
						to="organizer"
						className="px-5 py-3 text-base font-semibold"
						style={activeTab}
					>
						Organizer
					</NavLink>
					<NavLink
						to="participants"
						className="px-5 py-3 text-base font-semibold"
						style={activeTab}
					>
						Participants
					</NavLink>
					<NavLink
						to="update"
						className="px-5 py-3 text-base font-semibold"
						style={activeTab}
					>
						Update
					</NavLink>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};
