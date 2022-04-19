import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readEvents } from "./services/crud/events";
import { SplashScreen } from "./splash";
import { signIn } from "./services/auth";
import firebase from "firebase/compat/app";
import {
	setCreatedEvents,
	setInterestedEvents,
	setRegisteredEvents,
} from "./redux/actions/eventActions";
import { UserRole } from "./services/crud/user";

function App() {
	const dispatch = useDispatch();
	const [loading1, setLoading1] = useState(true);
	const [loading2, setLoading2] = useState(true);
	const [loading3, setLoading3] = useState(true);
	const { loggedIn, currentUser } = useSelector((state) => state.users);
	const allEvents = useSelector((state) => state.events.events);

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

	const getFilteredEvents = useCallback((events, ids) => {
		return events.filter((event) => ids.includes(event.id));
	}, []);

	useEffect(() => {
		if (loggedIn && allEvents.length > 0) {
			const interestedEvents = getFilteredEvents(
				allEvents,
				currentUser.interestedEvents
			);
			const registeredEvents = getFilteredEvents(
				allEvents,
				currentUser.registeredEvents
			);
			dispatch(setInterestedEvents(interestedEvents));
			dispatch(setRegisteredEvents(registeredEvents));
			if (currentUser.role === UserRole.ORGANIZATION) {
				const createdEvents = getFilteredEvents(
					allEvents,
					currentUser.createdEvents
				);
				dispatch(setCreatedEvents(createdEvents));
			}
		}
		setLoading3(false);
	}, [getFilteredEvents, loggedIn, allEvents, currentUser]);

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
