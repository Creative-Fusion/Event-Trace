import { Filter } from "../../../data/classes";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const useGetEvent = () => {
	const eventName = useParams().eventId;
	const events = useSelector((state) => state.events.events);
	return Filter.filterRadio(eventName, "name", events)[0];
};
