import React from "react";

export const Badge = ({
	text,
	absolute = true,
	position = "top-5 right-5",
	bgColor = "bg-primary",
}) => {
	return (
		<div
			className={`${
				absolute ? `absolute ${position}` : ""
			} rounded-full py-1 px-3 text-base font-semibold text-white opacity-80 uppercase cursor-default ${bgColor}`}
		>
			{text}
		</div>
	);
};
