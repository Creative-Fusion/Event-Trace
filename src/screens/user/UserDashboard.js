import SideBar from "../../components/SideBar";
import Events from "../../dummy data/events.json";
import user from "../../dummy data/user";
import UserEvents from "./UserEvents";
import UserProfile from "./UserProfile";



const Userdashboard = () => {
    

    return ( 
        <div className="absolute flex flex-wrap flex-row m-0 font-sans w-screen">
            <div className="flex flex-row w-screen gap-0">
                <div className="hidden lg:block xl:basis-[21%] lg:basis-[19%]">
                    <SideBar user= { user }/>
                </div>
                {/* <div className="grow">
                    <UserProfile user={ user }/>
                </div> */}

                <div className="grow">
                    <UserEvents events = {Events}/>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Userdashboard;