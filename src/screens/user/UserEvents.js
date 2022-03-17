import EventList from "../../components/EventList"

const UserEvents = ({events}) => {

    return ( 
        <div>
            { events.map( (events)=>{
                return (
                    <EventList events = {events} key={events.id}/>
                )
            }) }
        </div>
     );
}
 
export default UserEvents;