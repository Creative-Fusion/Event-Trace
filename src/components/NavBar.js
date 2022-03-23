import React, { useState } from "react";
import Brand from "./Brand";
import { Link, NavLink } from "react-router-dom";

// Icons
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import {
	IoSettingsOutline,
	IoLogOutOutline,
	IoCaretDown,
} from "react-icons/io5";
import { BiCalendarCheck, BiCalendarHeart } from "react-icons/bi";
import { MdHome, MdEvent, MdAddCircleOutline } from "react-icons/md";

export const NavBar = ({ loggedIn = false }) => {
	const name = "Jason Mark";

	let [bmHidden, setBMHidden] = useState(true);
	let [umHidden, setUMHidden] = useState(true);

	const activeNav = ({ isActive }) => ({
		color: isActive ? "#5B4DFF" : "black",
		fontWeight: isActive ? "bold" : "600",
	});

	return (
		<nav className="fixed top-0 flex md:flex-row flex-col w-full md:items-center md:justify-start px-8 justify-between ">
			<div className="flex flex-row justify-between h-full">
				<Brand />
				<div className="inline-flex md:hidden self-center h-[60px]">
					<Link to={"/"} className="mr-3 self-center">
						<FaUserCircle className="nav-icon group-hover:text-gray-500" />
					</Link>
					<button onClick={() => setBMHidden(!bmHidden)}>
						<FaBars className="nav-icon" />
					</button>
				</div>
			</div>
			<div
				className={`${
					bmHidden ? "hidden" : ""
				} md:inline-flex md:flex-grow pl-10 md:pb-0 pb-5 items-center md:justify-between text-center h-fit`}
			>
				<ul className="nav-items flex flex-col items-end md:flex-row md:items-start md:flex-none">
					<NavLink to="/" style={activeNav} className="nav-link">
						<span className="pr-3">Home</span>
						<MdHome className="md:hidden inline-block align-middle h-5 w-5 " />
					</NavLink>
					{/* //TODO: Add Navigations */}
					<NavLink to="/e/1/about" style={activeNav} className="nav-link">
						<span className="pr-3">Events</span>
						<MdEvent className="md:hidden inline-block align-middle h-5 w-5" />
					</NavLink>
					<NavLink to="/e/create" style={activeNav} className="nav-link">
						<span className="pr-3">Create Event</span>
						<MdAddCircleOutline className="md:hidden inline-block align-middle h-5 w-5" />
					</NavLink>
					{/* TODO: Remove these two nav links */}
					<NavLink to="/o/1" style={activeNav} className="nav-link">
						Organizer dashboard
					</NavLink>
					<NavLink to="/u/home" style={activeNav} className="nav-link">
						UserHomeScreen
					</NavLink>
				</ul>
				<div className="md:grow md:h-[60px]"></div>
				{!loggedIn && (
					<Link to="/" className="outlined-primary-btn justify-end ">
						Sign in
					</Link>
				)}
				{loggedIn && (
					<div className="hidden md:flex">
						<button>
							<FaBell className="nav-icon" />
						</button>
						<button
							className="ml-4 flex items-center group"
							onClick={() => setUMHidden(!umHidden)}
						>
							<FaUserCircle className="nav-icon group-hover:text-gray-500" />
							<span className="px-1.5 nav-menu-text group-hover:text-gray-500">
								{name}
							</span>

							{/* {!checkUserMenuHidden && (
								<IoIosArrowUp className="nav-icon group-hover:text-gray-500" />
							)}
							{checkUserMenuHidden && ( */}
							<IoCaretDown className="nav-icon group-hover:text-gray-500" />
							{/* )} */}
						</button>
						<ul
							className={`${
								umHidden ? "hidden" : ""
							} absolute z-1 w-fit bg-white opacity-75 rounded h-fit p-3  top-16 right-8`}
						>
							{/* //TODO: Add Navigations */}
							<li>
								<Link to={"/"} className="flex items-center group py-1.5">
									<IoSettingsOutline className="nav-icon group-hover:text-gray-500" />
									<span className="px-2 nav-menu-text group-hover:text-gray-500">
										Settings
									</span>
								</Link>
							</li>
							<li>
								<Link to={"/"} className="flex items-center group py-1.5">
									<BiCalendarCheck className="nav-icon group-hover:text-gray-500" />
									<span className="px-2 nav-menu-text group-hover:text-gray-500">
										Registered Events
									</span>
								</Link>
							</li>
							<li>
								<Link to={"/"} className="flex items-center group py-1.5">
									<BiCalendarHeart className="nav-icon group-hover:text-gray-500" />
									<span className="px-2 nav-menu-text group-hover:text-gray-500">
										Favourite Events
									</span>
								</Link>
							</li>
							<li>
								<button className="flex items-center group py-1.5 border-t-2 mt-1 w-full">
									<IoLogOutOutline className="nav-icon group-hover:text-gray-500" />
									<span className="px-2 nav-menu-text group-hover:text-gray-500">
										Logout
									</span>
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};
