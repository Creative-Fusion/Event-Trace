import React, { useState } from "react";
import Brand from "./Brand";
import { Link } from "react-router-dom";

// Icons
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoSettingsOutline } from "@react-icons/all-files/io5/IoSettingsOutline";
import { BiCalendarCheck } from "@react-icons/all-files/bi/BiCalendarCheck";
import { BiCalendarHeart } from "@react-icons/all-files/bi/BiCalendarHeart";
import { IoIosLogOut } from "@react-icons/all-files/io/IoIosLogOut";

export const NavBar = ({ loggedIn = false }) => {
	const name = "Jason Mark";

	let [bmClass, setBMClass] = useState(
		"hidden md:inline-flex md:flex-grow pl-10 items-center md:justify-between md:h-full h-[160px]"
	);

	let [umClass, setUMClass] = useState(
		"hidden absolute z-1 w-fit bg-white opacity-75 rounded h-fit p-3  top-16 right-8"
	);

	const showUserMenu = () => {
		console.log(umClass.includes("hidden"));
		if (umClass.includes("hidden ")) {
			setUMClass(umClass.replace("hidden ", ""));
		} else {
			setUMClass("hidden " + umClass);
		}
	};

	const showBurgerMenu = () => {
		if (bmClass.includes("hidden ")) {
			setBMClass(bmClass.replace("hidden ", ""));
		} else {
			setBMClass("hidden " + bmClass);
		}
	};

	return (
		<nav className="fixed flex md:flex-row flex-col w-full md:items-center md:justify-start px-8 justify-between ">
			<div className="flex flex-row justify-between h-full">
				<Brand />
				<div className="inline-flex md:hidden self-center h-[60px]">
					<Link to={"/"} className="mr-3 self-center">
						<FaUserCircle className="nav-icon group-hover:text-gray-500" />
					</Link>
					<button id="burger" onClick={showBurgerMenu}>
						<FaBars className="nav-icon" />
					</button>
				</div>
			</div>
			<div className={bmClass} id="nav-menu">
				<ul className="nav-items flex flex-col items-end md:flex-row md:items-start md:flex-none ">
					<Link to="/" className="nav-link">
						Home
					</Link>
					{/* //TODO: Add Navigations */}
					<Link to="/events/1" className="nav-link">
						Events
					</Link>
					<Link to="/events/create" className="nav-link">
						Create Event
					</Link>
					<Link to="/events/2" className="nav-link">
						Organizer dashboard
					</Link>

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
							onClick={() => showUserMenu()}
						>
							<FaUserCircle className="nav-icon group-hover:text-gray-500" />
							<span className="px-1.5 nav-menu-text group-hover:text-gray-500">
								{name}
							</span>

							{/* {!checkUserMenuHidden && (
								<IoIosArrowUp className="nav-icon group-hover:text-gray-500" />
							)}
							{checkUserMenuHidden && ( */}
							<IoIosArrowDown className="nav-icon group-hover:text-gray-500" />
							{/* )} */}
						</button>
						<ul className={umClass} id="user-menu">
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
									<IoIosLogOut className="nav-icon group-hover:text-gray-500" />
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
