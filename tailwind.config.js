//const colors = require('tailwindcss/colors')
import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      colors: {
        canvas: 'rgb(var(--color-canvas-default) / 100)',
        border: "rgb(var(--color-border-default) / 100)",
        primary: colors.violet,
        "primary-accent": colors.rose,
        error: "rgb(var(--color-error) / 100)",
        link: "rgb(var(--indigo-3) / 100)",
        "link-visited": "rgb(var(--purple-3) / 100)",
        text: {
          1: "rgb(var(--gray-1) / 100)",
          2: "rgb(var(--gray-4) / 100)"
        },
        surface: {
          1: "rgb(var(--gray-9) / 100)",
          2: "rgb(var(--gray-8) / 100)",
          3: "rgb(var(--gray-7) / 100)",
          4: "rgb(var(--gray-6) / 100)"
        },
      },
      boxShadow:{
        1: "0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))"
      }
    },
  },
  plugins: []
  //plugins: [require('@tailwindcss/forms')]
}

