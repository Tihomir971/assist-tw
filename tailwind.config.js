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
			sans: ["system-ui","-apple-system","Segoe UI","Roboto","Ubuntu","Cantarell","Noto Sans","sans-serif"],
			serif: ['ui-serif', 'serif'],
			mono: ["Dank Mono","Operator Mono","Inconsolata","Fira Mono","ui-monospace","SF Mono","Monaco","Droid Sans Mono","Source Code Pro","monospace"]
		},
		boxShadow: {
			'1': 'var(--shadow-1)',
			'2': 'var(--shadow-2)',
			'3': 'var(--shadow-3)',
			'4': 'var(--shadow-4)',
			'5': 'var(--shadow-5)',
			'6': 'var(--shadow-6)',
			},
		extend: {},
	},
	plugins: [],
}