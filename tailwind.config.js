/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				burtons: "Burtons", //custom font otf
				// google fonts
				playfairDisplay: ["Playfair Display", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				// google fonts
			},
		},
	},
	plugins: [],
}
