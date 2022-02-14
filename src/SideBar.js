import { MdPermIdentity } from "@react-icons/all-files/md/MdPermIdentity";
import { MdLockOutline } from "@react-icons/all-files/md/MdLockOutline";

const SideBar = () => {
    return ( 
        <aside className="float-left bg-[#BCBBE57D] fixed h-full ">
            <div>
                EventTrace
            </div>

            <div className="h-20">
                EventTrace
            </div>
            
            <div className="pt-20 text-xl font-[649] text-[#0A1C5CCC]">
                <ul>
                    <li className="mb-1.5 mt-1">
                        <a className="inline-flex pl-7 w-full hover:bg-[#858EDCFC]">
                            <MdPermIdentity className="self-center"/>
                            <span className="self-center pl-2.5">
                                My Profile
                            </span>
                        </a>
                    </li>
                    <li className="mt-1">
                        <a className="inline-flex pl-7 w-full hover:bg-[#858EDCFC]">
                            <MdLockOutline className="self-center"/>
                            <span className="self-center pl-2.5">
                                Password
                            </span>
                        </a>
                    </li>

                    <hr className="text-[#858282C7] h-0.5 bg-[#858282C7] m-6"/>

                    <li className="mb-2.5">
                        <a className="inline-flex pl-7 pr-10 hover:bg-[#858EDCFC]">
                            <MdPermIdentity className="self-center"/>
                            <span className="self-center pl-2.5">
                                Registered Events
                            </span>
                        </a>
                    </li>

                    <li className="mb-5">
                        <a className="inline-flex pl-7 pr-10 hover:bg-[#858EDCFC]">
                            <MdPermIdentity className="self-center"/>
                            <span className="self-center pl-2.5">
                                Interested Events
                            </span>
                        </a>
                    </li>

                    <hr className="text-[#858282C7] h-0.5 bg-[#858282C7] ml-6 mr-6"/>

                    <li className="mb-2.5 mt-5">
                        <a className="inline-flex pl-7 w-full hover:bg-[#858EDCFC]">
                            <MdPermIdentity className="self-center"/>
                            <span className="self-center pl-2.5">
                              Log Out
                            </span>
                        </a>
                    </li>
                    
                    <hr className="text-[#858282C7] h-0.5 bg-[#858282C7] m-6 mt-3 mb-3"/>

                </ul>
            </div>
        </aside>
     );
}
 
export default SideBar;