import { REQUEST, request } from "./axios";
export const EVENT_REQUESTS = {
	CREATE_EVENT: "CREATE_EVENT",
	ALL_EVENTS: "ALL_EVENTS",
};

export const EventRequest = async (requestType, { data }) => {
	const initial = "events";
	switch (requestType) {
		case EVENT_REQUESTS.ALL_EVENTS:
			return await request(REQUEST.GET, { url: `${initial}` });
		case EVENT_REQUESTS.CREATE_EVENT:
			return await request(REQUEST.POST, {
				url: `${initial}/create`,
				data: !data ? {} : data,
			});

		default:
			return;
	}
};
