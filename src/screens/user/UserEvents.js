import EventList from "./EventList";
import events from "../../dummy data/events.json";

export const UserEvents = () => {
	return (
		<div className="mx-28">
			{events.map((events, index) => {
				return <EventList events={events} key={events.id} index={index} />;
			})}
		</div>
	);
};
