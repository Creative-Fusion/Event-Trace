import {
	BsFacebook,
	BsInstagram,
	BsYoutube,
	BsTwitter,
	BsGithub,
	BsLinkedin,
} from "react-icons/bs";

import { SiTiktok } from "react-icons/si";

export const categories = [
	"Adventure",
	"Cosplay",
	"Educational",
	"Festival",
	"History",
	"Literature",
	"Science",
	"Social",
	"Sports",
	"Technology",
	"Other",
];

export const connectIcons = {
	facebook: <BsFacebook className="w-7 h-7 text-[#3b5998]" />,
	instagram: <BsInstagram className="w-7 h-7 text-[#FD1D1D]" />,
	youtube: <BsYoutube className="w-7 h-7 text-[#ff0000]" />,
	twitter: <BsTwitter className="w-7 h-7 text-[#1da1f2]" />,
	linkedIn: <BsLinkedin className="w-7 h-7 text-[#0a66c2]" />,
	github: <BsGithub className="w-7 h-7 text-[#171515]" />,
	tiktok: <SiTiktok className="w-7 h-7 text-[#010101]" />,
};
