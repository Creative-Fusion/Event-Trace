import React, { useEffect, useState } from "react";
import { firebaseLoggedInUser } from "./services/firebase";

export const Redirect = () => {
	const [currentUser, setCurrentUser] = useState(null);

	// console.log(currentUser.displayName);
	useEffect(() => {
		setCurrentUser(firebaseLoggedInUser());
		console.log(currentUser.displayName);
	}, [currentUser]);

	return (
		<div className="w-full text-center">
			Redirecting...
			{/* {currentUser.displayName ? currentUser.displayName : ""} */}
		</div>
	);
};
