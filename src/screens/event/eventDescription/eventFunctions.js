import { Filter } from "../../../data/classes";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { readUserById } from "../../../services/crud/user";

export const useGetEvent = () => {
	const eventName = useParams().eventId;
	const events = useSelector((state) => state.events.events);
	return Filter.filterRadio(eventName, "name", events)[0];
};

export const getOrganizer = async (id) => {
	return await readUserById(id);
};
