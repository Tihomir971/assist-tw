//const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: { 
      sans: [ "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif" ],
      serif: ['ui-serif', 'serif'],
      mono: [ "Dank Mono","Operator Mono","Inconsolata","Fira Mono","ui-monospace","SF Mono","Monaco","Droid Sans Mono","Source Code Pro","monospace"],
    },
    extend: {
      colors: {
        clrBrand: 'rgb(var(--indigo-8) / 100)',
        text:{
          1: {
            light: 'rgb(var(--gray-9) / 100)',
            dark: 'rgb(var(--gray-1) / 100)'
          },
          2: {
            light: 'rgb(var(--gray-7) / 100)',
            dark: 'rgb(var(--gray-4) / 100)'
          }
        },
        
        surface: {
          1: {
            light: "rgb(var(--gray-0) / 100)",
            dark: "rgb(var(--gray-9) / 100)"
          },
          2: {
            light: "rgb(var(--gray-2) / 100)",
            dark: "rgb(var(--gray-8) / 100)"
          },
          3: {
            light: "rgb(var(--gray-3) / 100)",
            dark: "rgb(var(--gray-7) / 100)"
          },
          4: {
            light: "rgb(var(--gray-4) / 100)",
            dark: "rgb(var(--gray-6) / 100)"
          },
        },
      },
      boxShadow: {
        '1': '0 1px 2px -1px rgba(var(--shadow-color), calc(var(--shadow-strength) + 0.09))',
        "2": [
          "0 3px 5px -2px rgba(3, 4, 7, 0.28)",
          "0 7px 14px -5px rgba(3, 4, 7, 0.30)"
        ],
        '3': [
          "0 -1px 3px 0 rgba(3, 4, 7, 0.27)",
          "0 1px 2px -5px rgba(3, 4, 7, 0.27)",
          "0 2px 5px -5px rgba(3, 4, 7, 0.29)",
          "0 4px 12px -5px rgba(3, 4, 7, 0.3)",
          "0 12px 15px -5px rgba(3, 4, 7, 0.32)"
          ],        
        '4': [
          "0 -2px 5px 0 rgba(35, 35, 37, 0.3)",
          "0 1px 1px -2px rgba(35, 35, 37, 0.4)",
          "0 2px 2px -2px rgba(35, 35, 37, 0.4)",
          "0 5px 5px -2px rgba(35, 35, 37, 0.5)",
          "0 9px 9px -2px rgba(35, 35, 37, 0.6)",
          "0 16px 16px -2px rgba(35, 35, 37, 0.7)"
        ],        
        '5': [
          "0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%))",
          "0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%))",
          "0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%))",
          "0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%))",
          "0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))",
          "0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))"
        ],
        '6': [
          "0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%))",
          "0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%))",
          "0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%))",
          "0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%))",
          "0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))",
          "0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%))",
          "0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))"
        ]
      }
/*       boxShadowColor: {
        color: {
          light: "rgb(var(--shadow-color-light) / 100)",
          dark: "rgb(var(--shadow-color-dark) / 100)"
        },
      }, */
    },
  },
  plugins: []
  //plugins: [require('@tailwindcss/forms')]
}