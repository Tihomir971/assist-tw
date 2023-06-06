/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        error: 'rgb(var(--color-error) / 1)'
        
      },
    },
  },
  plugins: [],
}

