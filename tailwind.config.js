/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRowStart: {
        '13': '13',
        '21': '21',
        '38': '38',
        '61': '61',
        '100': '100'
      }
    },
  },
  plugins: [],
}

