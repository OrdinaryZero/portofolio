/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        manga: {
          black: '#111111',
          white: '#F7F7F5', // Soft paper off-white
          crimson: '#900C3F', // Deep blood/ink red
          gray: '#D1D1D1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        display: ['Bebas Neue', 'Impact', 'sans-serif'], // Bold manga titles
        jp: ['Noto Sans JP', 'sans-serif'], // For Japanese characters
      },
      boxShadow: {
        'manga': '8px 8px 0px 0px #111111', // Hard black shadow
        'manga-hover': '12px 12px 0px 0px #900C3F', // Crimson hard shadow
        'manga-sm': '4px 4px 0px 0px #111111',
      }
    },
  },
  plugins: [],
}