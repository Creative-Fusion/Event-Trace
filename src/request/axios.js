const axios = require("axios").default;

export const REQUEST = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE",
};

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000/",
	timeout: 30000,
});

const getRequest = async (url, { params }) => {
	try {
		const res = await axiosInstance.get(url, {
			params: params,
		});
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};

export const request = async (requestType, { url, data }) => {
	// axios.defaults.baseURL = "http://localhost:8000/";

	switch (requestType) {
		case REQUEST.GET:
			await getRequest(url, { params: data });
			break;
		default:
			break;
	}
};
