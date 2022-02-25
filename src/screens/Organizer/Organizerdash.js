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
import { Cards } from "../../components/eventcards";

export const OrganizerDescription = () => {
	const [seeMore, setSeeMore] = useState(false);

	const organizerdash = {
		id: "1",
		name: "Kathmandu University Computer Club",
		email: "kuhackfest2022@gmail.com",
		description:
			"Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. Culpa eiusmod irure consectetur cillum amet dolor veniam non sunt labore laboris ipsum non reprehenderit. Proident officia cillum sint magna tempor sunt nostrud sint duis incididunt nostrud eu duis deserunt. Elit fugiat anim minim ullamco consectetur proident proident Lorem eiusmod eiusmod exercitation laborum dolor id. ",
		phone: "+977-9810101010",
		website: "www.kuhackfest.com",
		profileImage:
			"https://dl.airtable.com/.attachmentThumbnails/92020239ebbd95f0a24cc87065621906/e020fe8e",
		connect: [
			{
				media: "facebook",
				url: "www.facebook.com",
			},
			{
				media: "instagram",
				url: "www.instagram.com",
			},
			{
				media: "youtube",
				url: "https://www.youtube.com",
			},
		],
		
	};
	const trimmedDescription =
	organizerdash.description.length > 380
		? `${organizerdash.description.slice(0, 380)}...`
		: organizerdash.description;

const contactLinks = [];
if (organizerdash.email)
	contactLinks.push({
		value: organizerdash.email,
		icon: <BsEnvelope className="w-6 h-6" />,
	});
if (organizerdash.phone)
	contactLinks.push({
		value: organizerdash.phone,
		icon: <BsTelephone className="w-6 h-6" />,
	});
if (organizerdash.website)
	contactLinks.push({
		value: organizerdash.website,
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
		<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
			<div classname = 'pt-6 pl-20 ml-20'>

		<div className="rounded-full w-40 h-50  aspect-square bg-secondary  md:my-8 mx-12 mb-3">

			<img
				src={organizerdash.profileImage}
				alt={organizerdash.name + "'s Profile Picture"}
			/>
			</div>
		<div class = "flex mx-12">
		<IconedInfoList list={contactLinks} />

		</div>
		
		<div className="xs:block hidden text-left  mt-3 mx-9">
						<h5 className="pl-2">Connect via:</h5>
						{organizerdash.connect.map((media) => (
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
	

  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">

<div className="col-span-3">

							<div className="text-left">

								<h2>{organizerdash.name}</h2>
							
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
											{organizerdash.description}{" "}
											<span
												className="text-blue-700 underline cursor-pointer"
												onClick={() => setSeeMore(!seeMore)}
											>
												See Less ↑
											</span>
										</p>
									)}
								</div>
							
							</div>
					
				</div>
				</div>
				{/* {/* <div class = "flex mx-9 mt-64 ml-2 mr-96" >
	<Cards/>
	</div> */}
	<div class = "flex mx-3 mt-64 ml-2 mr-82" >
	<Cards/>
	</div>

</figure>


	);
};

