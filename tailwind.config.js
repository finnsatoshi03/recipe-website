/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
    colors: {
      black: "#252525",
      white200: "#f3f3f5",
      green: "#607917",
    },
    extend: {},
  },
  plugins: [],
};
