import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allEvents } from "../redux/actions/eventActions";
import { ActionTypes } from "../redux/constants/actionTypes";
import { EventRequest } from "../request/eventRequest";
import { useSelector } from "react-redux";
import { getAllEvents } from "../redux/reducers/eventReducer";

export const Home = () => {
	const dispatch = useDispatch();
	// const [eventsList, setEventsList] = useState([]);
	// eventsList = setEventsList(useSelector(getAllEvents));
	useEffect(() => {
		EventRequest(ActionTypes.EVENT.ALL_EVENTS, { data: {} }).then((events) => {
			dispatch(allEvents(events));
		});
	});

	return <div className="grid grid-cols-3 gap-10"></div>;
};
