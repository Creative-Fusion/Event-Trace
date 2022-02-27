import React from "react";
import { useState } from "react";
import { trimtext } from "../data/functions";

export const TrimmedText = ({ text, length = 380 }) => {
	const [seeMore, setSeeMore] = useState(false);

	const trimmedDescription = trimtext({ text: text, length: length });

	return (
		<div>
			{!seeMore && (
				<p>
					{trimmedDescription}{" "}
					<span
						className="text-blue-700 underline cursor-pointer"
						onClick={() => setSeeMore(!seeMore)}
					>
						See More ↓
					</span>
				</p>
			)}
			{seeMore && (
				<p>
					{text}{" "}
					<span
						className="text-blue-700 underline cursor-pointer"
						onClick={() => setSeeMore(!seeMore)}
					>
						See Less ↑
					</span>
				</p>
			)}
		</div>
	);
};
