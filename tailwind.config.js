/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paua: {
          '50': '#f4f1ff',
          '100': '#ece5ff',
          '200': '#dbceff',
          '300': '#c1a7ff',
          '400': '#a476ff',
          '500': '#8a3fff',
          '600': '#7f18ff',
          '700': '#7307fa',
          '800': '#6005d2',
          '900': '#5006ac',
          '950': '#270060',
        },
      },
    },
  },
  plugins: [],
}


