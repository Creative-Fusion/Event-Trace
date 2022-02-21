import React, { useEffect } from "react";
import { EventRequest, EVENT_REQUESTS } from "../request/eventRequest";

export const Home = () => {
	// const callRequest = async () => {
	// 	console.log("Calling");
	// 	await EventRequest(EVENT_REQUESTS.CREATE_EVENT);
	// };
	// useEffect(() => {
	// 	callRequest();
	// });

	return (
		<div className="grid grid-cols-2 w-screen">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span className="bg-gray-200">EventTrace Checked</span>
			</header>
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span className="bg-gray-200">EventTrace Checked</span>
			</header>
		</div>
	);
};
