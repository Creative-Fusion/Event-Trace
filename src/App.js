import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/home";
import { CreateEvent } from "./screens/event/CreateEvent";
import { EventDescription } from "./screens/event/eventDescription/EventDescription";
import { OrganizerDescription } from "./screens/Organizer/Organizerdash";
import { HomeScreen } from "./screens/event/HomeScreen";

function App() {
	return (
		<Router>
			<div className="relative App">
				<NavBar loggedIn={false} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/events/create" element={<CreateEvent />} />
						<Route path="/events/1" element={<EventDescription />} />
						<Route path="/organizer/1" element={<OrganizerDescription />} />
						<Route path="/events/3" element={<HomeScreen />} />
						<Route
							path="*"
							element={
								<h2 className="w-full text-center">404: Page Not Found.</h2>
							}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
