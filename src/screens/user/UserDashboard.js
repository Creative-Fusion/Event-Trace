import SideBar from "../../components/SideBar";
import UserProfile from "../UserProfile";
import Userprofile from "./UserProfile";


const Userdashboard = () => {
    return ( 
        <div className="absoulte flex flex-wrap flex-row m-0 font-sans w-screen">
            <div className="flex flex-row w-screen gap-0">
                <div className="hidden lg:block xl:basis-[21%] lg:basis-[19%]">
                    <SideBar/>
                </div>
                <div className="grow">
                    <UserProfile/>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Userdashboard;