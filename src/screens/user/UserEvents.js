import EventList from "../../components/EventList"

const UserEvents = ({events}) => {


    return ( 
        <div className="mx-28">
            { events.map( (events, index)=>{

                return (
                    <EventList events = {events} key={events.id} index={index}/>
                )
            }) }
        </div>
     );
}
 
export default UserEvents;