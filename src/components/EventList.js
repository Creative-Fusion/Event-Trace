const EventList = ({ events }) => {
    return ( 
        <div>
            <div>Image</div>
            <div>{ events.name }</div>
            <div>Description</div>
            <div>cover</div>
        </div>
     );
}
 
export default EventList;