/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-dark': '#1C1B22',
				'main-black': '#111111',
				'main-green': '#a8fea0',
				'main-orange': '#FE6313',
				'main-red': '#FF5943'
			}
		},
		fontFamily: {
			'Poppins': ['Poppins', 'sans-serif'],
			'Lato': ['Lato', 'sans-serif']
		}
	},
	plugins: [],
}
