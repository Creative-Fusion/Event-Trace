export const eventSchema = {
	id: String,
	name: String,
	desription: String,
	coverImage: String,
	categories: [String],
	type: String,
	participantLimit: Number,
	dateTime: {
		startDate: String,
		startTime: String,
		endDate: String,
		endTime: String,
	},
	location: {
		location: String,
		latitude: Number,
		longitude: Number,
	},
	eventLink: String,
	publish: Boolean,
	creator: {
		accountID: String,
		role: String,
	},
	soldTickets: [String],
};

// class EventSchema{
// 	String id;

// 	constructor({
// 		id,
// 	name,
// 	desription,
// 	coverImage,
// 	categories,
// 	type,
// 	participantLimit,
// 	dateTime,
// 	location,
// 	eventLink,
// 	publish,
// 	creator,
// 	}){
// 		id = id;

// 	}
// }
