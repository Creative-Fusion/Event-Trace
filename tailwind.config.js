module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	content: ["./node_modules/@themesberg/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				primary: "#5B4DFF",
				secondary: "#E8E6FF",

				grey: "#515050",
			},
		},
	},
	plugins: [
		require("@themesberg/flowbite/plugin"),
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
