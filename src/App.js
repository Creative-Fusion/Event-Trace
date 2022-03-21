import { NavBar } from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { EventTraceRouter } from "./router";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar loggedIn={false} />
				<div className="content">
					<EventTraceRouter />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
