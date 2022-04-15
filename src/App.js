import { NavBar } from "./components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { firebaseLoggedInUser, onAuthStateChanged } from "./services/firebase";
import { signIn } from "./services/auth";
import { useDispatch } from "react-redux";

function App() {
	// useEffect(() => {
	// 	onAuthStateChanged();
	// 	const user = firebaseLoggedInUser();
	// 	console.log(`USER: ${JSON.stringify(user)}`);
	// 	user
	// 		? signIn(user, dispatch).then(() => navigate("u/home"))
	// 		: navigate("/home");
	// 	// navigate("/admin");
	// });

	return (
		<div className="App">
			<NavBar />
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
