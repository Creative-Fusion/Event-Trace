import SideBar from "./SideBar";
import Userprofile from "./UserProfile";


const Userdashboard = () => {
    return ( 
        <div className="absoulte flex flex-wrap flex-row m-0 font-sans w-screen">
            <div className="flex flex-row w-screen">
                <div className="basis-1/5">
                    <SideBar/>
                </div>
                <div className="grow">
                    <Userprofile/>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Userdashboard;