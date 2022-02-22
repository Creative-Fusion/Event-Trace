import SideBar from "./SideBar";
import Userprofile from "./UserProfile";


const Userdashboard = () => {
    return ( 
        <div className="absoulte flex flex-wrap flex-row m-0 font-sans w-screen">
            <div className="flex flex-row w-screen gap-0">
                <div className="hidden lg:block lg:basis-[18] basis-[20%]">
                    <SideBar/>
                </div>
                <div className="">
                    <Userprofile/>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Userdashboard;