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
	const [loading1, setLoading1] = useState(true);
	const [loading2, setLoading2] = useState(true);

	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(async (user) => {
				if (user) {
					await signIn(user, dispatch);
				}
				setLoading1(false);
			});
		console.log("Auth State");
		return () => unregisterAuthObserver();
	});

	useEffect(() => {
		readEvents(dispatch).then((events) => {
			setLoading2(false);
		});
		console.log("Read Events");
	});

	if (loading1 && loading2) return <SplashScreen />;
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
