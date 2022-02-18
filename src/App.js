import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/home";
import { CreateEvent } from "./screens/CreateEvent";
import UserProfile from "./screens/UserProfile";

function App() {
	return (
		<Router>
			<div className="relative App">
				<NavBar loggedIn={true} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/events/create" element={<CreateEvent />}></Route>
						<Route path="/user/userprofile" element={<UserProfile />}></Route>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
