/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				figtree: ['Figtree', 'sans-serif'],
			},
			colors: {
				superlight: '#F0F1EA',
			},
		},
	},
	plugins: [],
}
