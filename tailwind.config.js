import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
	content: ['./src/**/*.{html,css,svelte}'],
	theme: {
		colors: {
			text: {
				100: "rgb(var(--text-100) / 100)",
				200: "rgb(var(--text-200) / 100)"
			},
			surface: {
				100: "rgb(var(--surface-100) / 100)",
				200: "rgb(var(--surface-200) / 100)",
				300: "rgb(var(--surface-300) / 100)",
				400: "rgb(var(--surface-400) / 100)",
			},
			secondary: colors.emerald,
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			fancy: ['Pushster', 'cursive'],
		},
		extend: {},
	},
	plugins: [],
}