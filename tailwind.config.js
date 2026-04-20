/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        goldcs: "#FAA41A",
        goldcslight: "#F2C94C",
        goldcsdark: "#cd7f00ff",
        goldcsexlight: "#ffe495ff",
        greencs: " #32CD32"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
