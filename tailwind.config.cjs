/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js",
    "./App.js",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "purple-me": "rgb(98 0 234)",
        "purple-input": "#7926ed",
        "purple-input-hover": "#681fcf",
        "white-me": "#f1f3f3",
        "dark-me": "rgb(31 41 55)",
        "semidark-me": "rgb(75 85 99)",
        "blue-me": "rgb(59 130 246)",
      },
      screens: {
        xsm: { min: "310px", max: "640px" },
      },
      width: {
        "w-100": "100vw",
      },
    },
  },
  plugins: [],
};
