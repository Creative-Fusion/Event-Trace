import { useDispatch } from "react-redux";
import { REQUEST, request } from "./axios";
export const EVENT_REQUESTS = {
	CREATE_EVENT: "CREATE_EVENT",
};

export const EventRequest = async (requestType) => {
	const initial = "events";
	switch (requestType) {
		case EVENT_REQUESTS.CREATE_EVENT:
			await request(REQUEST.GET, { url: `${initial}/create/abc` });
			break;

		default:
			break;
	}
};
