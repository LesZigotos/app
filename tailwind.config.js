/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'primary': '#0064A8',
      'primary-light': '#69BFE8',
      'primary-dark': '#162751',
      'primary-darker': '#080E1E',
      'gray': '#EBEBEB',
      'gray-darker': '#8492a6',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}