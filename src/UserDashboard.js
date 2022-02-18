import SideBar from "./SideBar";
import Userprofile from "./UserProfile";


const Userdashboard = () => {
    return ( 
        <div className="absoulte flex flex-wrap flex-row m-0 font-sans w-screen">
            <div className="flex flex-row w-screen gap-0">
                <div className="xl:basis-[19.5%]">
                    <SideBar/>
                </div>
                <div className="xl:grow">
                    <Userprofile/>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Userdashboard;