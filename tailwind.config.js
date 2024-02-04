/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'amethyst': '#9b5de5ff',
        'brilliant-rose': '#f15bb5ff',
        'maize': '#fee440ff',
        'deepskyblue': '#00bbf9ff',
        'aquamarine': '#00f5d4ff',
      },
    },
  },
  plugins: [],
};
