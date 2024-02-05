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
        'brilliant-rose': {
          '50': '#fdf2f9',
          '100': '#fce7f5',
          '200': '#fcceed',
          '300': '#fba6dd',
          '400': '#f670c4',
          '500': '#f15bb5',
          '600': '#de248b',
          '700': '#c1156e',
          '800': '#a0145c',
          '900': '#85164f',
          '950': '#51062c',
        },      
      },
    },
  },
  plugins: [],
};
