module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				xl: "1440px",
			},
			fontFamily: {
				barlow: ['"Barlow Semi Condensed"', "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
