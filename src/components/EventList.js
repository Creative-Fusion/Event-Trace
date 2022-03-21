import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import { IoIosHeart } from "@react-icons/all-files/io/IoIosHeart";
import { IoIosHeartEmpty } from "@react-icons/all-files/io/IoIosHeartEmpty";

const EventList = ({ events, index }) => {

    const truncate = (string, n)=>{
        return (string.length > n) ? string.substr(0, n-1) + "..." : string;
      };

    const date = (data) => {
        const date =  data.substr(0, 6);
        const day = date.slice(4, date.length);
        return day;
    };

    const month = (data) => {
        const date =  data.substr(0, 6);
        const month = date.substr(0, 3);
        return month;
    }

    return ( 
        <div className="flex flex-row justify-start my-6 shadow-md w-auto items-start border-[0.2px] border-slate-100">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row">
                    <div className="sm:w-auto lg:pr-6 pr-10 h-full">
                        <img src={events.coverImage} className="object-cover w-[5rem] h-[4rem] lg:w-[14rem] lg:h-[8rem]" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-start my-2 w-auto">
                        <div className="text-[17px] font-bold text-[#1A2B49FF]">{ events.name }</div>
                        <div className="text-[14px] font-medium text-[#183A75FF]">{ truncate(events.description,55) }</div>
                        <div className="flex flex-row text-[14px] font-normal text-[#959CA9]">
                            <IoLocationOutline className="self-center"/>
                            <div>{ events.location }</div>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            
                            <div className="flex flex-col">
                                <div className="text-[14px] font-normal text-[#959CA9]">{ events.day }, { events.date }</div>
                                <div className="border-[0.5px] w-28 mt-0.5 rounded">
                                    <div className="text-[14px] font-semibold text-[#6034BE]">{ events.categories }</div>
                                </div>
                            </div>
                            <button className="block self-end">
                                <div className="hidden border-2 border-[#575757] rounded-full font-bold h-auto items-end" >
                                    <IoIosHeart className="self-center items-center font-bold text-[#575757] w-5 h-5 m-[3px]"/>
                                </div>
                                <div className="border-2 border-[#575757] rounded-full font-bold h-auto items-end" >
                                    <IoIosHeartEmpty className="self-center items-center font-bold text-[#575757] w-5 h-5 m-[3px]"/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-32 text-white text-3xl font-bold">
                    {index%2===0 && 
                        <div className="flex flex-col bg-[#7B84A5] h-full items-center justify-center">
                            <div>
                                { date(events.date) }
                            </div>
                            <div>
                                { month(events.date) }
                            </div>
                        </div>}
                    {index%2!==0 && 
                        <div className="flex flex-col bg-[#A57B99] h-full items-center justify-center">
                            <div>
                                { date(events.date) }
                            </div>
                            <div>
                                { month(events.date) }
                            </div>
                        </div>
                    }
                </div>
            </div>
            
        </div>
     );
}
 
export default EventList;