import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { readEvents } from "./services/crud/events";
import { SplashScreen } from "./splash";
import { signIn } from "./services/auth";
import firebase from "firebase/compat/app";

function App() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(0);

	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(async (user) => {
				if (user) {
					await signIn(user, dispatch);
				}
				setLoading((prev) => prev + 1);
			});
		return () => unregisterAuthObserver();
	});

	useEffect(() => {
		readEvents(dispatch).then((events) => {
			setLoading((prev) => prev + 1);
		});
	});

	if (loading < 2) return <SplashScreen />;
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
