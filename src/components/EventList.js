const EventList = ({ events }) => {

    const truncate = (string, n)=>{
        return (string.length > n) ? string.substr(0, n-1) + "..." : string;
      };

    return ( 
        <div className="flex flex-row justify-start m-4 shadow-md w-auto items-start border-[0.2px] border-slate-100">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row">
                    <div className="sm:w-auto lg:pr-6 pr-10">
                        <img src={events.coverImage} className="object-cover w-[5rem] h-[4rem] lg:w-[10rem] lg:h-[6rem]" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="text-[17px] font-bold">{ events.name }</div>
                        <div className="text-[14px] font-medium">{ truncate(events.description, 50) }</div>
                        <div className="text-[14px] font-medium">{ events.location }</div>
                        <div className="text-[14px] font-medium">{ events.date }</div>
                        <div className="text-[14px] font-medium">{ events.categories }</div>
                    </div>
                </div>
                <div>cover</div>
            </div>
            
        </div>
     );
}
 
export default EventList;