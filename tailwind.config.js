/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        navbgfrom: "#FFFCF7",
        navbgvia: "#FFFAF0",
        navbgto: "#FFF8EB",
        orangecolor: "#F95C19",
        graycolor: "#817382",
        yellowcolor: "#FFAF0F",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
