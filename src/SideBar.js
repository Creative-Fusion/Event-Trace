import {IoPersonOutline} from "@react-icons/all-files/io5/IoPersonOutline"

const SideBar = () => {
    return ( 
        <aside className="float-left w-45 bg-violet-200 p-10 text-black fixed h-full ">
            <div>
                <ul>
                    <li>
                        <a className="inline-flex">
                            <IoPersonOutline className="self-center"/>
                            <span className="self-center pl-2">
                                My Profile
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className="mt-20 text-2xl font-semibold text-black">Password</a>
                    </li>
                    <li>
                        <a className="mt-20 text-2xl font-semibold text-black">My Profile</a>
                    </li>
                    <li>
                        <a className="mt-20 text-2xl font-semibold text-black">My Profile</a>
                    </li>
                </ul>
            </div>
        </aside>
     );
}
 
export default SideBar;