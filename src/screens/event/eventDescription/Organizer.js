import React from "react";
import { Container } from "../../../components/container";
import { useState } from "react";
import { IconedInfoList } from "./IconedInfoList";
import {
	BsFacebook,
	BsInstagram,
	BsYoutube,
	BsTwitter,
	BsGithub,
	BsLinkedin,
	BsEnvelope,
	BsTelephone,
	BsGlobe2,
} from "react-icons/bs";

import { SiTiktok } from "react-icons/si";

export const Organizer = ({ organizer }) => {
	const [seeMore, setSeeMore] = useState(false);

	const trimmedDescription =
		organizer.description.length > 380
			? `${organizer.description.slice(0, 380)}...`
			: organizer.description;

	const contactLinks = [];
	if (organizer.email)
		contactLinks.push({
			value: organizer.email,
			icon: <BsEnvelope className="w-6 h-6" />,
		});
	if (organizer.phone)
		contactLinks.push({
			value: organizer.phone,
			icon: <BsTelephone className="w-6 h-6" />,
		});
	if (organizer.website)
		contactLinks.push({
			value: organizer.website,
			icon: <BsGlobe2 className="w-6 h-6" />,
		});

	const connectIcons = {
		facebook: <BsFacebook className="w-7 h-7 text-[#3b5998]" />,
		instagram: <BsInstagram className="w-7 h-7 text-[#FD1D1D]" />,
		youtube: <BsYoutube className="w-7 h-7 text-[#ff0000]" />,
		twitter: <BsTwitter className="w-7 h-7 text-[#1da1f2]" />,
		linkedIn: <BsLinkedin className="w-7 h-7 text-[#0a66c2]" />,
		github: <BsGithub className="w-7 h-7 text-[#171515]" />,
		tiktok: <SiTiktok className="w-7 h-7 text-[#010101]" />,
	};

	return (
		<div className="md:w-4/6 w-9/12 mx-auto">
			<div className="md:grid md:grid-cols-5 gap-10">
				<div className="md:block flex col-span-2 order-last w-fit mx-auto items-center">
					<div className="rounded-full w-40 aspect-square bg-secondary mx-auto md:my-8 mb-3">
						<img
							src={organizer.profileImage}
							alt={organizer.name + "'s Profile Picture"}
						/>
					</div>
					<div className="xs:block hidden text-left md:ml-0 ml-4">
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
				<div className="col-span-3">
					<Container
						content={
							<div className="text-left">
								<h2>{organizer.name}</h2>
								<div className="text-grey font-normal pt-2 pb-5">
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
											{organizer.description}{" "}
											<span
												className="text-blue-700 underline cursor-pointer"
												onClick={() => setSeeMore(!seeMore)}
											>
												See Less ↑
											</span>
										</p>
									)}
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
