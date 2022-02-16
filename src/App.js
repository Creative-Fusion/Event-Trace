import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/home";
import { CreateEvent } from "./screens/CreateEvent";

function App() {
	return (
		<Router>
			<div className="relative App">
				<NavBar loggedIn={false} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/events/create" element={<CreateEvent />}></Route>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
