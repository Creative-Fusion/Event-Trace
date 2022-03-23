import React from "react";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { EventCard } from "./eventcard";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const OneRowList = ({ events }) => {
	return (
		<ScrollMenu
			// LeftArrow={LeftArrow}
			// RightArrow={RightArrow}
			wrapperClassName="h-full lg:px-8 md:px-4"
			scrollContainerClassName="lg:pl-12 pl-6 pr-4"
		>
			{events.map((event) => (
				<EventCard event={event} key={event.name} />
			))}
		</ScrollMenu>
	);
};

export const MultipleRowList = ({ events }) => {
	return (
		<div className="flex flex-wrap justify-start">
			{events.map((event) => (
				<EventCard event={event} key={event.name} />
			))}
		</div>
	);
};

// function Arrow({ disabled, onClick, arrow }) {
// 	console.log(disabled, arrow);
// 	return (
// 		<div
// 			className={`hidden ${
// 				arrow === "r" ? "lg:right-14 right-4" : "lg:left-14 left-4"
// 			} md:flex rounded-full shadow-md bg-secondary cursor-pointer`}
// 			disabled={disabled}
// 			onClick={onClick}
// 		>
// 			{arrow === "l" && <FaArrowAltCircleLeft className="w-10 h-10" />}
// 			{arrow === "r" && <FaArrowAltCircleRight className="w-10 h-10" />}
// 		</div>
// 	);
// }

// function LeftArrow() {
// 	const {
// 		isFirstItemVisible,
// 		scrollPrev,
// 		visibleItemsWithoutSeparators,
// 		initComplete,
// 	} = React.useContext(VisibilityContext);

// 	const [disabled, setDisabled] = React.useState(
// 		!initComplete || (initComplete && isFirstItemVisible)
// 	);
// 	React.useEffect(() => {
// 		if (visibleItemsWithoutSeparators.length) {
// 			setDisabled(isFirstItemVisible);
// 		}
// 	}, [isFirstItemVisible, visibleItemsWithoutSeparators]);

// 	return (
// 		<Arrow disabled={disabled} onClick={() => scrollPrev()} arrow={"l"}></Arrow>
// 	);
// }

// function RightArrow() {
// 	const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
// 		React.useContext(VisibilityContext);

// 	const [disabled, setDisabled] = React.useState(
// 		!visibleItemsWithoutSeparators.length && isLastItemVisible
// 	);
// 	React.useEffect(() => {
// 		if (visibleItemsWithoutSeparators.length) {
// 			setDisabled(isLastItemVisible);
// 		}
// 	}, [isLastItemVisible, visibleItemsWithoutSeparators]);

// 	return (
// 		<Arrow disabled={disabled} onClick={() => scrollNext()} arrow={"r"}>
// 			Right
// 		</Arrow>
// 	);
// }
