import { MdPermIdentity } from "react-icons/md";
import { BiPowerOff, BiHeart, BiCalendarEvent } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMenuUnfold, AiOutlineEdit } from "react-icons/ai";
import user from "../dummy data/user";
import { Layout, Menu, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const { Sider } = Layout;
const SideBar = () => {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
	const { currentUser } = useSelector((state) => state.users);
	const navigate = useNavigate();
	return (
		<div>
			<Sider
				breakpoint="lg"
				trigger={null}
				collapsible
				collapsed={sidebarCollapsed}
				collapsedWidth="0"
				width={225}
				style={{
					overflow: "auto",
					position: "fixed",
					left: 0,
					top: 60,
					bottom: 0,
				}}
			>
				<div className="h-full flex flex-col justify-between">
					<div>
						<div className="m-8 flex flex-col items-center justify-center">
							<img
								src={currentUser.profileImage}
								alt="User Profile"
								className="rounded-full aspect-square w-24"
							/>
							<div className="block mt-3 text-lg font-medium text-secondary uppercase">
								{currentUser.name}
							</div>
						</div>
						<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
							<Divider
								orientation="left"
								className="text-secondary"
								style={{ color: "#E8E6FF", borderColor: "white" }}
								orientationMargin={15}
							>
								Profile
							</Divider>
							<Menu.Item
								key="1"
								icon={<MdPermIdentity className="w-5 h-5" />}
								onClick={() => navigate("/u/0/profile")}
								className="font-medium"
							>
								My Profile
							</Menu.Item>
							<Menu.Item
								key="2"
								icon={<AiOutlineEdit className="w-5 h-5" />}
								onClick={() => navigate("/u/0/edit-profile")}
								className="font-medium"
							>
								Edit Profile
							</Menu.Item>

							<Divider
								orientation="left"
								className="text-secondary"
								style={{ color: "#E8E6FF", borderColor: "white" }}
								orientationMargin={15}
							>
								Events
							</Divider>
							<Menu.Item
								key="3"
								icon={<BiCalendarEvent className="w-5 h-5" />}
								onClick={() => navigate("/u/0/interested")}
								className="font-medium"
							>
								Registered Events
							</Menu.Item>
							<Menu.Item
								key="4"
								icon={<BiHeart className="w-5 h-5" />}
								onClick={() => navigate("/u/0/interested")}
								className="font-medium"
							>
								Interested Events
							</Menu.Item>
						</Menu>
					</div>
					<div className="px-6 py-5">
						<div className="flex text-secondary font-semibold text-base justify-start items-center py-1.5">
							<IoSettingsOutline className="w-5 h-5 mr-2" />
							Settings and Privacy
						</div>
						<div className="flex text-secondary font-semibold text-base justify-start items-center py-1.5">
							<BiPowerOff className="w-5 h-5 mr-2" />
							Logout
						</div>
					</div>
				</div>
			</Sider>
			<div
				className="lg:hidden absolute top-[65px] left-2 bg-grey text-white opacity-70 p-2 rounded"
				onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
			>
				<AiOutlineMenuUnfold className="h-8 w-8" />
			</div>
		</div>
	);
};

export default SideBar;
