import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import { MdEdit } from "@react-icons/all-files/md/MdEdit";

const UserProfile = ({ user }) => {

    return ( 
        <div className="flex flex-col xl:items-center xl:justify-center lg:items-start lg:justify-start items-center justify-center w-full">
            <div className="flex flex-col items-start xl:w-3/5 w-5/6  justify-start p-10 pt-8">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex sm:w-auto w-full">
                        <div className="sm:w-auto lg:pr-16 pr-10">
                            <img src={user.userImage} className="w-[5rem] h-[5rem] lg:w-[9.5rem] lg:h-[9.5rem]" alt="" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="pt-1 lg:text-[24px] text-[18px] font-bold whitespace-nowrap text-black">
                                { user.name }
                            </div>
                            <div className="lg:pt-2.5 pt-1.5 lg:text-[18px] text-[14px] font-semibold whitespace-nowrap text-[#0A1C5CA3]">
                                { user.email }
                            </div>
                            <div className="pt-2.5 flex lg:text-[16px] text-[12px] font-regular text-black">
                                <IoLocationOutline className="self-center" />
                                <span className="px-1.5">
                                    {user.address}
                                </span>
                            </div>
                            <div className="hidden lg:block lg:mt-4 mt-2 md:p-0.5 md:w-24 w-20 rounded-md drop-shadow-lg bg-[#108B50]">
                                <span className="text-[16px] self-center font-semibold whitespace-nowrap text-white">
                                    User
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <button className="hidden md:flex border-2 text-[14px] border-[#9B9B9B55] text-[#9B9B9B] rounded-[5px] pl-3 pr-3">
                            <span className="px-1.5">
                                Edit
                            </span>
                            <MdEdit className="self-center" />
                        </button>
                    </div>
                </div>
                <div className="pt-14 pb-5 md:text-[22px] text-[16px] font-bold whitespace-nowrap text-black">
                    About
                </div>
                <hr className="text-[#858282C7] h-0.5 bg-[rgba(133,130,130,0.78)] w-full"/>
                <div className="flex flex-row md:w-1/2 xl:w-3/5 w-full justify-between">
                    <div className=" flex flex-col md:text-[16px] text-[14px]  font-medium items-start justify-start pt-5 text-[#0A1C5CA3]">
                        <div className="pb-5">
                            Email
                        </div>
                        <div className="pb-5">
                            Contact No
                        </div>
                        <div className="pb-5">
                            Address
                        </div>
                        <div className="pb-5">
                            Gender
                        </div>
                    </div>
                    <div className=" flex flex-col md:text-[16px] text-[14px] font-medium items-start justify-start pt-5 text-[#00040EA3]">
                        <div className="pb-5">
                            {user.email}
                        </div>
                        <div className="pb-5">
                            {user.contactNo}
                        </div>
                        <div className="pb-5">
                            {user.address}
                        </div>
                        <div className="pb-5">
                            {user.gender}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UserProfile;