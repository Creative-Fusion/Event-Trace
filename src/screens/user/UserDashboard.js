import SideBar from "../../components/SideBar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const Userdashboard = () => {
	return (
		// <div className="absolute flex flex-wrap flex-row m-0 font-sans w-screen">
		// 	<div className="flex flex-row w-screen gap-0">
		// 		<div className="hidden lg:block xl:basis-[21%] lg:basis-[19%]">
		// 			<SideBar user={user} />
		// 		</div>
		// 		<div className="grow">
		// 			<UserProfile user={user} />
		// 		</div>

		// 		{/* <div className="grow">
		//             <UserEvents events = {Events}/>
		//         </div>
		//          */}
		// 	</div>
		// </div>
		<Layout hasSider>
			<SideBar />
			<Content className="lg:w-full lg:pl-[225px] py-10">
				<Outlet />
			</Content>
		</Layout>
	);
};

export default Userdashboard;
