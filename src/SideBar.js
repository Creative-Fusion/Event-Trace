import { MdPermIdentity } from "@react-icons/all-files/md/MdPermIdentity";
import { MdLockOutline } from "@react-icons/all-files/md/MdLockOutline";
import { BiCalendarEvent } from "@react-icons/all-files/bi/BiCalendarEvent";
import { BiHeart } from "@react-icons/all-files/bi/BiHeart"
import { BiPowerOff } from "@react-icons/all-files/bi/BiPowerOff"; 

import Brand from './components/Brand';

const SideBar = () => {

    const userImage = "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=212"
    const userName = "John William";
    
    return ( 
        <aside className="hidden sm:block sm:float-left sm:w-auto sm:bg-[#BCBBE57D] sm:fixed sm:h-full sm:pt-6">
            <div className="pl-7">
                <Brand className="ml-5"/>
            </div>
            
            <div className="m-8 flex flex-col items-center justify-center">
                <div>
                    <img src={ userImage } alt="User Profile" className="self-center rounded-full h-20 w-20 md:h-24 md:w-24 flex items-center justify-center bg-slate-500"/>
                </div>
                <div className="block mt-3 text-sm md:text-lg lg:text-sm lg:font-medium text-[#0A1C5CBF]">{ userName }</div>
            </div>


            
            
            <div className="w-auto text-sm md:text-md lg:w-50 lg:text-xl font-[649] text-[#0A1C5CCC]">
                <ul>
                    <li className="sm:mb-3 sm:mt-2.5 md:mb-1.5 md:mt-1">
                        <a href="#" className="inline-flex self-center md:self-start pr-3 pl-4 md:pl-7 md:pr-8 w-full hover:bg-[#858EDCFC] active:bg-[#858EDCFC] focus-visible:bg-[#858EDCFC]">
                            <MdPermIdentity className="self-center"/>
                            <span className="self-center pl-2.5">
                                My Profile
                            </span>
                        </a>
                    </li>
                    <li className="sm:mb-3 sm:mt-2.5 md:mb-1.5 md:mt-1">
                        <a className="inline-flex self-center md:self-start pr-3 pl-4 md:pl-7 md:pr-8 w-full hover:bg-[#858EDCFC]">
                            <MdLockOutline className="self-center"/>
                            <span className="self-center pl-2.5">
                                Password
                            </span>
                        </a>
                    </li>

                    <hr className="text-[#858282C7] h-0.5 bg-[#858282C7] m-2 md:m-5 lg:m-6 "/>

                    <li className="sm:mb-3 sm:mt-2.5 md:mb-1.5 md:mt-1">
                        <a className="inline-flex self-center md:self-start pr-3 pl-4 md:pl-7 md:pr-8 w-full hover:bg-[#858EDCFC]">
                            <BiCalendarEvent className="self-center"/>
                            <span className="self-center pl-2.5">
                                Registered Events
                            </span>
                        </a>
                    </li>

                    <li className="sm:mb-3 sm:mt-2.5 md:mb-1.5 md:mt-1">
                        <a className="inline-flex pr-3 pl-4 md:pl-7 md:pr-8 w-full hover:bg-[#858EDCFC]">
                            <BiHeart className="self-center"/>
                            <span className="self-center pl-2.5">
                                Interested Events
                            </span>
                        </a>
                    </li>

                    <hr className="text-[#858282C7] h-0.5 bg-[#858282C7] m-2 md:m-5 lg:m-6 "/>

                    <li className="sm:mb-3 sm:mt-2.5 md:mb-1.5 md:mt-1">
                        <button className="inline-flex text-sm lg:text-xl font-[649] pr-3 pl-4 md:pl-7 md:pr-8 w-full hover:bg-[#858EDCFC]">
                            <BiPowerOff className="self-center"/>
                            <span className="self-center pl-2.5">
                              Log Out
                            </span>
                        </button>
                    </li>
                    
                    <hr className="text-[#858282C7] h-0.5 bg-[#858282C7] m-2 md:m-5 lg:m-6 "/>

                </ul>
            </div>
        </aside>
     );
}
 
export default SideBar;