import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { EventTraceRouter } from "./router";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "@themesberg/flowbite";
import "./App.less";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <EventTraceRouter /> */}
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
