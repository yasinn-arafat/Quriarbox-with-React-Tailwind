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
        bodyfromcolor: "#FFF6E5",
        bodytocolor: "#FFF7E6",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      oxanium: ["Oxanium", "sans-serif"],
    },
    content: {
      Icon: 'url("./src/assets/Vector.png")',
    },
  },
  plugins: [],
};
