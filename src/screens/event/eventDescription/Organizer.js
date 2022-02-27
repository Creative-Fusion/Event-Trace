import React from "react";
import { Container } from "../../../components/container";
import { IconedInfoList } from "../../../components/IconedInfoList";
import { checkContactLinks } from "../../../data/functions";
import { connectIcons } from "../../../data/data";
import { ConnectIcons } from "../../../components/connectIcons";
import { TrimmedText } from "../../../components/trimmedText";

export const Organizer = ({ organizer }) => {
	const contactLinks = checkContactLinks(organizer);

	return (
		<div className="md:w-4/6 w-9/12 mx-auto">
			<div className="md:grid md:grid-cols-5 gap-10">
				<div className="md:block col-span-2 order-last w-fit mx-auto items-center">
					<div className="rounded-full w-40 aspect-square bg-secondary mx-auto md:my-8 mb-3">
						<img
							src={organizer.profileImage}
							alt={organizer.name + "'s Profile Picture"}
						/>
					</div>
					<div className="xs:block hidden text-left md:ml-0 ml-4">
						<ConnectIcons connectLinks={organizer.connect} />
					</div>
				</div>
				<div className="col-span-3">
					<Container
						content={
							<div className="text-left">
								<h2>{organizer.name}</h2>
								<div className="text-grey font-normal pt-2 pb-5">
									<TrimmedText text={organizer.description} />
								</div>
								<IconedInfoList list={contactLinks} />
							</div>
						}
					/>
				</div>
			</div>
			<div className="block xs:hidden text-left mt-4">
				<h5 className="pl-2">Connect via:</h5>
				{organizer.connect.map((media) => (
					<a
						href={
							media.url.includes("https://")
								? media.url
								: `https://${media.url}`
						}
						className="inline-block p-2"
						target="_blank"
						rel="noreferrer"
					>
						{connectIcons[media.media]}
					</a>
				))}
			</div>
		</div>
	);
};
