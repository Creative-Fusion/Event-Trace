import SideBar from "../../components/SideBar";
import UserProfile from "./UserProfile";

const Userdashboard = () => {

    const user={
        name: "John Williams",
        email: "johnwilliam@gmail.com",
        contactNo: "+977 9861252346",
        address: "Kathmandu, Nepal",
        gender: "Male",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
    }

    return ( 
        <div className="absoulte flex flex-wrap flex-row m-0 font-sans w-screen">
            <div className="flex flex-row w-screen gap-0">
                <div className="hidden lg:block xl:basis-[21%] lg:basis-[19%]">
                    <SideBar user= { user }/>
                </div>
                <div className="grow">
                    <UserProfile user={ user }/>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Userdashboard;