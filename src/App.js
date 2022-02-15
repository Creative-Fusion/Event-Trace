import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/home";

function App() {
	return (
		<Router>
			<div className="relative App">
				<NavBar loggedIn={true} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
