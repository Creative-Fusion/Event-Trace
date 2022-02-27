import React from "react";
import { connectIcons } from "../data/data";

export const ConnectIcons = ({ connectLinks }) => {
	return (
		<div>
			<h5 className="">Connect via:</h5>
			{connectLinks.map((media) => (
				<a
					href={
						media.url.includes("https://") ? media.url : `https://${media.url}`
					}
					className="inline-block pr-4 py-2"
					target="_blank"
					rel="noreferrer"
				>
					{connectIcons[media.media]}
				</a>
			))}
		</div>
	);
};
