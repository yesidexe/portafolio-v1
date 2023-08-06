/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				right: {
					'0%, 100%':{transform: 'translateX(-25%)',animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'},
					'50%':{transform: 'translateX(0)',animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
				},
			},
			animation: {
				right: 'right 1s infinite',
			},
			fontSize: {
				clamp: "clamp(1rem, 5vw, 3rem)",
			},
		},
		fontFamily: {
			'poppins': ['Poppins', 'sans-serif']
		}
	},
	plugins: [],
}