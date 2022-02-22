import React from "react";

export const Container = ({ content }) => {
	return (
		<div className="w-full h-full bg-[#FBFBFB] shadow-lg rounded px-5 py-4 text-left">
			{content}
		</div>
	);
};
