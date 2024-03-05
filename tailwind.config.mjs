/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-dark': '#1C1B22',
				'main-purple': '#FBFBFE'
			}
		},
	},
	plugins: [],
}
