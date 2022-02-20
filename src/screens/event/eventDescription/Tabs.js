import React, { useState } from "react";
import { About } from "./About";
import { Organizer } from "./Organizer";
import { Participants } from "./Participants";
import { Update } from "./Update";

const TabButton = ({ tabName, activeTab, activate }) => {
	const active = activeTab === tabName ? "active-tab" : "";
	const classes = `h-full px-5 text-base font-semibold text-grey ${active}`;

	return (
		<div className="lg:mx-10 md:mx-3 h-full">
			<button className={classes} onClick={() => activate(tabName)}>
				{tabName}
			</button>
		</div>
	);
};

export const Tabs = ({ event, organizer }) => {
	const currentUserId = "1";

	const tabs =
		event.creator.id === currentUserId
			? ["About", "Organizer", "Participants", "Update"]
			: ["About", "Organizer"];
	const [activeTab, setActiveTab] = useState(tabs[0]);

	const participants = {};

	const displayTabs = [
		<About event={event} />,
		<Organizer organizer={organizer} />,
		<Participants participants={participants} />,
		<Update event={event} />,
	];
	return (
		<div>
			<div className="md:w-4/6 w-9/12 mx-auto">
				<div className="h-[50px] md:mx-5 border-b-2 border-gray-400">
					<div className="md:mx-32 hidden sm:flex justify-center h-full">
						{tabs.map((tab) => {
							return (
								<TabButton
									tabName={tab}
									key={tab}
									activeTab={activeTab}
									activate={setActiveTab}
								/>
							);
						})}
					</div>
					<div className="sm:hidden flex justify-center h-full">
						<select
							className="select-tabs shrink border-none h-full px-5 text-base font-semibold text-grey active-tab"
							onChange={(v) => setActiveTab(v.target.value)}
						>
							{tabs.map((tab) => {
								return (
									<option
										className="bg-white text-grey font-semibold text-base"
										value={tab}
										key={tab}
									>
										{tab}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			</div>
			<div className="py-6">{displayTabs[tabs.indexOf(activeTab)]}</div>
		</div>
	);
};
